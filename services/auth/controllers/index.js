const db = require('../db/index');
const { response } = require('../../../lib/response');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');

const registerUser = async (req, res) => {

    let hashedPassword = bcrypt.hashSync(req.body.password, 8);

    let params = {
        username: req.body.username,
        emailId: req.body.emailId,
        password: hashedPassword
    };

    try{
        let result = await db.createUser(params);
        let user = result[0][0];
        console.log(user);
        let token = jwt.sign({id: user.userId}, authConfig.jwtSecret, {expiresIn: 86400});
        response(res, null,"User Created Successfully", {'userId':user.userId, 'username':user.username, 'emailId':user.emailId, 'token': token}, 201);
    }catch(err){
        console.log(err);
        response(res, err, "Error creating the user", null, 500);
    }
};

/*const AuthorizationMiddleware = async (req,res,next) => {
    let token = req.header('Authorization');

    if(!token) {
        response(res, null, {'error':'Token not provided'}, null, 401);
    }

    token = token.split(' ')[1];
    console.log(token);

    jwt.verify(token, authConfig.jwtSecret, async (err, decoded) => {
        if(err){
            response(res, null, {'error':'Token not verified'}, null, 401);
        }


    });
};*/

module.exports = {
    registerUser,
    //AuthorizationMiddleware
};