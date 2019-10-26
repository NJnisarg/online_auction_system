const { conn } = require('../../../database/connection');

const findUser = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call FindUser(?)'
        },
        [options.emailId],
        (error, results, fields) => {
            if(error)
            {
                reject("FINDUSER: Error finding the user " + error);
            }
            resolve(results);
        });
    })
};

const createUser = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call CreateUser(?,?,?)'
        },
        [options.username, options.emailId, options.password],
        (error, results, fields) => {
            if(error)
            {
                reject("CREATEUSER: Error inserting the data " + error);
            }
            resolve(results);
        });
    })
};

const getProfile = async(options) => {
    return new Promise((resolve, reject) => {

        let userId = options.userId;
        console.log(userId);
        if(userId===undefined || userId===null)
            reject("GETPROFILE: UserId is null or undefined");

        conn.query({
            sql: 'call GetProfile(?)',
        },
        [userId],
        (error, results, fields) => {
           if(error)
           {
               reject("GETPROFILE: Error fetching the data " + error);
           }
           resolve(results);
        });
    });
};

const updateProfile = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call UpdateProfile(?,?,?,?,?,?)'
        },
        [options.userId, options.name, options.address, options.age, options.dob, options.sex],
        (error, results, fields) => {
            if(error)
            {
                reject("UPDATEPROFILE: Error updating the data " + error);
            }
            resolve(results);
        });
    });
};

const createProfile = async (options) => {

};


module.exports = {
    findUser,
    createUser,
    getProfile,
    updateProfile,
    createProfile
};