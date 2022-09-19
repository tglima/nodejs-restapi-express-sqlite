const authService = require('../services/auth.service');

exports.auth = async(req, res, next) => {    

    const data = {
        username: req.body.username,
        password: req.body.password,
    };
    var resultDTO = {statusCode: 401, message: "Invalid credentials", success: 0};

    console.log('line 35'); 

    authService.checkAuth(data, (resultDTO)=>
    {
      console.log('line 39');
      return res.status(resultDTO.statusCode).send({
        success: resultDTO.success,
        message: resultDTO.message,
      });  
    });
  };