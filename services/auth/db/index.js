const { conn } = require('../../../database/connection');

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

module.exports = {
  createUser
};