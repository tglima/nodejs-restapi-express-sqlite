exports.getHome = (req, res, next) => {
    return res.status(200).send({
        success: 1,
        message: 'OK',
      });
  };