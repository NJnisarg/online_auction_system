/**
 * This file calls the stored procedure to create the database schema
 */

const { conn } = require('./connection');

// Calling the stored procedure to setup the schema.
// Call this only once at the start
const createSchema = () => {
    conn.query({
            sql: 'call OnlineAuctionSchema()'
        },
        (error, results, fields) => {
            if(error){
                console.log(error);
                return;
            }

            if(results){
                console.log(results);
            }
        }
    );
};

module.exports = {
    createSchema
};
