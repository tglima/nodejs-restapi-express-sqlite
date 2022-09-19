const db  = require('../../config/database.config');
const tokenConfig = require('../../config/token.config');
const jwt = require('jsonwebtoken');

exports.checkAuth = (data, callback) => {
    const query = 
      `SELECT IdUser FROM VW_USER_ALLOW_GET_TOKEN 
        WHERE DeUserName = '${data.username}' and DePassword = '${data.password}';`;
    
    resultDTO = {statusCode: 401, message: "Invalid credentials", success:false};
    
    
   db.get(query, (err, row, fields) => {
      if (err) {        
        console.error(err);
        resultDTO = {statusCode: 500,message: "Internal Server Error", success: false};
      }
      if (err == null && row != null) {
        const id = row.IdUser;
        const token = {};
        token.acess_token = jwt.sign({id}, tokenConfig.secret, {expiresIn: (60 * tokenConfig.minutesExpiration) });
        token.token_type = tokenConfig.tokenType;
        token.minutesExpiration = tokenConfig.minutesExpiration;
        resultDTO = {statusCode: 200, message: "Sucess", success: true, token: token};
      }
      return callback(resultDTO);
  });
  };