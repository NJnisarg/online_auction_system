const db = require('../db/index');
const { response } = require('../../../lib/response');

const getAllAuctions = async (req, res) => {
    try{
        let result = await db.getAllAuctions(req.query);
        console.log(result);
        response(res, null ,"successfully retrieved all auctions", result, 200);
    }catch(err){
        console.log(err);
        response(res, err ,"Error in retrieving all the auctions", null, 404);
    }
};

const getAuction = async (req,res) => {
    try{
        let result = await db.getAuction(req.query);
        console.log(result);
        response(res, null, "Successfully retrieved the auction", result, 200);
    }catch(err){
        console.log(err);
        response(res, err ,"Error in retrieving the auction", null, 404);
    }
};

const createAuction = async (req, res) => {
    try{
        let result = await db.createAuction(req.body);
        console.log(result);
        response(res,null,"Successfully created an auction", result, 200);
    }catch(err){
        console.log(err);
        response(res, err, "Error creating the auction", null, 500);
    }
};

const updateAuction = async (req, res) => {
    try{
        let result = await db.updateAuction(req.body);
        console.log(result);
        response(res,null,"Successfully updated the auction", result, 200);
    }catch(err){
        console.log(err);
        response(res, err, "Error updating the auction", null, 500);
    }
};

const deleteAuction = async (req, res) => {
    try{
        let result = await db.deleteAuction(req.query);
        console.log(result);
        response(res,null,"Successfully deleted the auction", result, 200);
    }catch(err){
        console.log(err);
        response(res, err, "Error deleting the auction", null, 500);
    }
};

module.exports = {
    getAllAuctions, 
    getAuction,
    createAuction,
    updateAuction,
    deleteAuction
}