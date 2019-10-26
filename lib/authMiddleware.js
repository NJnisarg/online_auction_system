const jwt = require('jsonwebtoken');
const { response } = require('./response');

const authConfig = {
    'jwtSecret':'ThisIsATestSecret'
};

const AuthorizationMiddleware = async (req,res,next) => {
    let token = req.header('Authorization');

    if(!token) {
        response(res, null, {'error':'Token not provided'}, null, 401);
    }

    token = token.split(' ')[1];
    console.log(token);

    jwt.verify(token, authConfig.jwtSecret, (err, decoded) => {
        if(err){
            response(res, err, "Token not verified", null, 401);
        }
        let userId = decoded.id;

        req.userId = userId;
        req.query.userId = userId;
        req.body.userId = userId;

        next();
    });
};

module.exports = {
    AuthorizationMiddleware,
    authConfig
};