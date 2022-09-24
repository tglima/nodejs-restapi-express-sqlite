const customerService = require('../services/customer.service');

exports.findCustomerById = async(req, res, next) => {

    const data = { id: req.query.id};

    customerService.findCustomerById(data, (resultService) =>
    {
      let jsonResult = {message: resultService.message, success: resultService.success};
      if(resultService.success)
      {
        jsonResult = resultService.client;
      }

      return res.status(resultService.statusCode).send(jsonResult);
    });
  };
