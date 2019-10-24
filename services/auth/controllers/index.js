const db = require('../db/index');
const { response } = require('../../../lib/response');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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


module.exports = {
    registerUser
};