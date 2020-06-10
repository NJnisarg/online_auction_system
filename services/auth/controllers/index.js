const db = require('../db/index');
const { response } = require('../../../lib/response');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = {
    'jwtSecret':'ThisIsATestSecret'
};

const getRole = async (req, res) => {
    try{
        let result = await db.getRole();
        console.log(result);
        response(res, null, "Roles fetched Successfully", result[0], 200);
    }catch (err) {
        console.log(err);
        response(res, err, "Error fetching the Roles", null, 500);
    }
};

const authenticateUser = async (req, res) => {
    let password = req.body.password;

    try {
        let result = await db.findUser(req.body);
        let user = result[0][0];

        console.log(user);

        if(bcrypt.compareSync(password, user.password))
        {
            let finalRes = {
                'userId':user.userId,
                'username':user.username,
                'emailId':user.emailId,
                'token': user.userId,
                'wallet': user.wallet,
                'role': user.Roles.split(",")[0], // Hacky way to do it
                'permissions': user.Permissions
            };
            response(res, null, "User Authenticated Successfully", finalRes, 200);
        }
        else {
            response(res, null, 'Passwords do not match', null, 401);
        }
    }
    catch (err) {
        response(res, null, 'No such user exists', null, 404);
    }
};

const registerUser = async (req, res) => {

    let hashedPassword = bcrypt.hashSync(req.body.password, 8);

    let params = {
        username: req.body.username,
        emailId: req.body.emailId,
        password: hashedPassword,
        roleId: req.body.roleId
    };

    try{
        let result = await db.createUser(params);
        let user = result[0][0];

        console.log(user);
        // let token = jwt.sign({id: user.userId}, authConfig.jwtSecret, {expiresIn: 86400});
        let token = user.userId;
        let finalRes = {
            'userId':user.userId,
            'username':user.username,
            'emailId':user.emailId,
            'token': user.userId,
            'wallet': user.wallet,
            'role': user.Roles.split(",")[0], // Hacky way to do it
            'permissions': user.Permissions
        };

        response(res, null,"User Created Successfully", finalRes, 201);
    }catch(err){
        console.log(err);
        response(res, err, "Error creating the user", null, 500);
    }
};

const getProfile = async (req, res) => {
    try{
        let result = await db.getProfile(req.query);
        console.log(result);
        response(res, null, "Profile fetched Successfully", result[0], 200);
    }catch (err) {
        console.log(err);
        response(res, err, "Error fetching the Profile", null, 500);
    }
};

const updateProfile = async (req, res) => {
    try{
        let result = await db.updateProfile(req.body);
        console.log(result);
        response(res, null, "Profile Updated Successfully", result[0], 200);
    }catch (err) {
        console.log(err);
        response(res, err, "Error Updating the Profile", null, 500);
    }
};

const createProfile = async (req, res) => {
    try{
        let result = await db.createProfile(req.body);
        console.log(result);
        response(res, null, "Profile Created Successfully", result[0], 200);
    }catch (err) {
        console.log(err);
        response(res, err, "Error creating the profile", null, 500);
    }
};


module.exports = {
    getRole,
    authenticateUser,
    registerUser,
    getProfile,
    updateProfile,
    createProfile
};