exports.getHome = (req, res, next) => {
    return res.status(200).send({
        success: true,
        message: 'OK',
      });
  };