var db  = require('../../config/database.config');

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
        resultDTO = {statusCode: 200, message: "Login sucess", success: true};
      }
      return callback(resultDTO);
  });
  };