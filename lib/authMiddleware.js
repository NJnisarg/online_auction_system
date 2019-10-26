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

    try{
        token = token.split(' ')[1];
        console.log(token);
        if(token === null || token === undefined)
            response(res, "Token is null","Token is null", null, 401);
        req.userId = token;
        req.query.userId = token;
        req.body.userId = token;

        next();
    }catch (e) {
        response(res, e,"Error parsing the authorization header", null, 401);
    }


};

module.exports = {
    AuthorizationMiddleware,
    authConfig
};