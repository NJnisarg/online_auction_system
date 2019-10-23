const { conn } = require('../../../database/connection');

const getAllAuctions = async (options) => {
    let {createdByUserId, categoryId, status} = options;
    return new Promise((resolve,reject) => {
        conn.query({
            sql: 'select * from Auction A inner join Product P on A.auctionId = P.auctionId where A.userId = coalesce(A.userId, ?) and categoryId = coalesce(P.categoryId, ?) and A.status = coalesce(A.status, ?)'
        },
        [createdByUserId, categoryId, status],
        (error, results, fields) => {
            if(error)
            {
                console.log(error);
                reject("GETALLAUCTIONS: Error fetching the data");
            }
            console.log(results);
            resolve(results);
        })
    })
}

const getAuction = async (options) => {
    return new Promise((resolve,reject) => {

        let {auctionId} = options;
        if(auctionId==undefined || auctionId==null)
            reject("GETAUCTION: AuctionId is null or undefined");
        
        conn.query({
            sql: 'select * from Auction A inner join Product P on A.auctionId = P.productId where A.auctionId = ?',
        },
        [auctionId],
        (error, results, fields) => {
            if(error)
            {
                console.log(error);
                reject( "GETAUCTION: Error fetching the data" + error);
            }
            console.log(results);
            resolve(results);
        });
    });
}

const createAuction = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call CreateAuction(?,?,?,?,?,?,?,?)'
        },
        [options.userId, options.title, options.description, options.imgUrl, options.startDate, options.endDate, options.category, options.startingBid],
        (error, results, fields) => {
            if(error)
            {
                console.log(error);
                reject( "CREATEAUCTION: Error inserting the data" + error);
            }
            console.log(results);
            resolve(results);
        });
    })
}

const updateAuction = async() => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call UpdateAuction(?,?,?,?,?,?,?,?)'
        },
        [options.auctionId, options.title, options.description, options.imgUrl, options.startDate, options.endDate, options.category, options.startingBid],
        (error, results, fields) => {
            if(error)
            {
                console.log(error);
                reject( "UPDATEAUCTION: Error updating the data" + error);
            }
            console.log(results);
            resolve(results);
        }
        );
    })
}

module.exports = {
    getAllAuctions,
    getAuction,
    createAuction,
    updateAuction,
    deleteAuction
}