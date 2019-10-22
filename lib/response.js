const response = (res, error, message, data, statusCode) => {
    let response = {error,message,data}
    return res.status(statusCode).json(response);

}
module.exports = {
    response
};