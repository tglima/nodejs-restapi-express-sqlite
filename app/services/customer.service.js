const db  = require('../../config/database.config');

exports.findCustomerById = (data, callback) => {
  const query =
    `SELECT * FROM VW_CUSTOMER WHERE IdCustomer = '${data.id}';`;

    let resultService = {statusCode: 404, message: "Cliente não encontrado!", success:false};

    db.get(query, (err, row, fields) => {
      if (err) {
        console.error(err);
        resultService = {statusCode: 500,message: "Internal Server Error", success: false};
      }

      if (err == null && row != null) {
        const client =
        {
          name: row.NmCustomer,
          gender: row.DeGender,
          birthDate: row.DtBirth,
          documentNumber: row.NuDocument,
          email: row.DeEmail,
          phoneDDD: row.NuDDD,
          phoneNumber: row.NuPhone
        };

        resultService = {statusCode: 200, success: true, client: client};
      }

      return callback(resultService);
  });
}
