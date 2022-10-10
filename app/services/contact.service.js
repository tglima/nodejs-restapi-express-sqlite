const db  = require('../config/database.config');

exports.validateMessage = (data, callback) => {

  let isValid = false;
  let isValidDeTelephone = true;
  let isValidDeEmail = true;
  let isValidDeMessage = true;
  let deMessageError = [];
  let resultValidate = {};

  if(data.deTelephone === null
    || data.deTelephone === undefined
    || data.deTelephone.length === 0 ){
      isValidDeTelephone = false;
      deMessageError.push("O Telefone informado é inválido!");
  }

  if(data.deEmail === null
    || data.deEmail === undefined
    || data.deEmail.length === 0 ){
      isValidDeEmail = false;
      deMessageError.push("O E-Mail informado é inválido!");
  }

  if(data.deMessage === null
    || data.deMessage === undefined
    || data.deMessage.length < 10 )
  {
    isValidDeMessage = false;
    deMessageError.push("A mensagem informada é inválida!");
  }

  if(isValidDeMessage && (isValidDeEmail || isValidDeTelephone))
  {
    isValid = true;
  }

  resultValidate.message = deMessageError;
  resultValidate.success = isValid;

  return callback(resultValidate);
};

exports.saveMessage = (data, callback) => {

  data.dtRegister = new Date().toJSON();

  const query =`INSERT INTO MESSAGE_CONTACT
	  (NmContact, DtRegister, DeEmail, DeTelephone, DeMessage)
    VALUES('${data.nmContact}','${data.dtRegister}', '${data.deEmail}', '${data.deTelephone}', '${data.deMessage}');`

  db.run(query, function(err){
    if (err)
    {
      console.error(err);
      resultService = {statusCode: 500,message: "Internal Server Error", success: false};
    }
    if(err === null)
    {
      resultService = {statusCode: 201, message: "OK", success: true};
    }
    return callback(resultService);
  });
};
