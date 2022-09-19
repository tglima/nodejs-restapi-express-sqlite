const authService = require('../services/auth.service');

exports.auth = async(req, res, next) => {    

    const data = {
        username: req.body.username,
        password: req.body.password,
    };
    var resultDTO = {statusCode: 401, message: "Invalid credentials", success: false};

    authService.checkAuth(data, (resultDTO)=>
    {
      return res.status(resultDTO.statusCode).send(resultDTO.token);
    });
  };