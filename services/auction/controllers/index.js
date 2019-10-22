const db = require('../db/index');
const { response } = require('../../../lib/response');

const getAllAuctions = async (req, res) => {
    try{
        let result = await db.getAllAuctions();
        console.log(result);
        response(res, null ,"successfully retrieved all auctions", result, 200);
    }catch(err){
        console.log(err);
    }
};

module.exports = {
    getAllAuctions
}