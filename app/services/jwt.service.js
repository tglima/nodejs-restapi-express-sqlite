const jwt = require('jsonwebtoken');
const tokenConfig = require('../../config/token.config');

exports.verifyJWT = (req, res, next) => {
    const bearerHeader = req.headers['authorization'].replace('Bearer ', '');

    if (!bearerHeader){
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    jwt.verify(bearerHeader, tokenConfig.secret, function(err, decoded) {
        if (err){
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }         

        req.userId = decoded.id;
        next();
      });
}