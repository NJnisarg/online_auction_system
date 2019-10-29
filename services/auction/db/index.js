const { conn } = require('../../../database/connection');

const getAllAuctions = async (options) => {
    let {createdByUserId, categoryId, status} = options;
    return new Promise((resolve,reject) => {
        conn.query({
            sql: 'call GetAllAuctions(?,?,?)'
        },
        [createdByUserId, categoryId, status],
        (error, results, fields) => {
            if(error)
            {
                reject("GETALLAUCTIONS: Error fetching the data");
            }
            resolve(results);
        })
    })
};

const getMyAuctions = async (options) => {
    let {createdByUserId, categoryId, status} = options;
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call GetMyAuctions(?,?,?)'
        },
        [createdByUserId, categoryId, status],
        (error, results, fields) => {
            if(error)
            {
                reject("GETMYAUCTIONS: Error fetching the data");
            }
            resolve(results);
        })
    })
};

const getAuction = async (options) => {
    return new Promise((resolve,reject) => {

        let {auctionId} = options;
        if(auctionId===undefined || auctionId===null)
            reject("GETAUCTION: AuctionId is null or undefined");
        
        conn.query({
            sql: 'call GetAuction(?)',
        },
        [auctionId],
        (error, results, fields) => {
            if(error)
            {
                reject( "GETAUCTION: Error fetching the data" + error);
            }
            resolve(results);
        });
    });
};

const createAuction = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call CreateAuction(?,?,?,?,?,?,?,?)'
        },
        [options.userId, options.title, options.description, options.imgUrl, options.startDate, options.endDate, options.categoryId, options.startingBid],
        (error, results, fields) => {
            if(error)
            {
                reject( "CREATEAUCTION: Error inserting the data" + error);
            }
            resolve(results);
        });
    })
};

const updateAuction = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call UpdateAuction(?,?,?,?,?,?,?,?)'
        },
        [options.auctionId, options.title, options.description, options.imgUrl, options.startDate, options.endDate, options.categoryId, options.startingBid],
        (error, results, fields) => {
            if(error)
            {
                reject( "UPDATEAUCTION: Error updating the data" + error);
            }
            resolve(results);
        }
        );
    })
};

const deleteAuction = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call DeleteAuction(?)'
        },
        [options.auctionId],
        (error, results, fields) => {
            if(error)
            {
                reject( "Delete: Error deleting the data" + error);
            }
            resolve(results);
        }
        );
    })
};

const getAuctionCategories = async() => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call GetAuctionCategories()'
        },
        (error, results, fields) => {
            if(error)
            {
                reject( "GETAUCTIONCATEGORIES: Error getting the data" + error);
            }
            resolve(results);
        }
        );
    })
};

const bid = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call Bid(?,?,?)'
        },
        [options.userId, options.auctionId, options.bidAmt],
        (error, results, fields) => {
            if(error)
            {
                reject( "BID: Error bidding on the auction" + error);
            }
            resolve(results);
        }
        );
    });
};

const pay = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
                sql: 'call Pay(?,?)'
            },
            [options.auctionId, options.userId],
            (error, results, fields) => {
                if(error)
                {
                    reject( "Pay: Error in paying for the auction" + error);
                }
                resolve(results);
            }
        );
    });
};

const getMyBids = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
            sql: 'call GetMyBids(?)'
            },
            [options.userId] ,
            (error,results,fields) => {
                if(error)
                {
                    reject( "BID: Error bidding on the auction" + error);
                }
                resolve(results);
            }
        );
    })
};

const getInvoice = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
                sql: 'call GetInvoice(?,?)'
            },
            [options.auctionId, options.userId],
            (error,results,fields) => {
                if(error)
                {
                    reject( "GET INVOICE: Error getting invoice data" + error);
                }
                resolve(results);
            }
        );
    })
};

const getMyPurchases = async(options) => {
    return new Promise((resolve, reject) => {
        conn.query({
                sql: 'call GetMyPurchases(?)'
            },
            [options.userId],
            (error,results,fields) => {
                if(error)
                {
                    reject( "GET MY PURCHASES: Error getting invoice data" + error);
                }
                resolve(results);
            }
        );
    })
};

module.exports = {
    getAllAuctions,
    getMyAuctions,
    getAuction,
    createAuction,
    updateAuction,
    deleteAuction,
    getAuctionCategories,
    bid,
    pay,
    getMyBids,
    getMyPurchases,
    getInvoice,
};