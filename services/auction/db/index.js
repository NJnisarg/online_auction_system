const { conn } = require('../../../database/connection');

const getAllAuctions = async () => {
    return new Promise((resolve,reject) => {
        conn.query({
            sql: 'select * from Auction'
        },
        (error, results, fields) => {
            if(error)
            {
                console.log(error);
                reject("Error fetching the data");
            }
            console.log(results);
            resolve(results);
        })
    })
}

module.exports = {
    getAllAuctions
}