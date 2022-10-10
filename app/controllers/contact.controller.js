const contactService = require('../services/contact.service');

exports.SaveMessageContact = async(req, res, next) => {

  const data = {
    nmContact: req.body.nmContact,
    deEmail: req.body.deEmail,
    deTelephone: req.body.deTelephone,
    deMessage: req.body.deMessage,
  };

  contactService.validateMessage(data, (resultValidate) =>
  {
    if(!resultValidate.success)
    {
      let jsonResult = {message: resultValidate.message, success: resultValidate.success};
      return res.status(400).send(jsonResult);
    }

    contactService.saveMessage(data, (resultService) =>
    {
      const jsonResult = { message: resultService.message, success: resultService.success} ;
      return res.status(resultService.statusCode).send(jsonResult);
    });
  });
};
