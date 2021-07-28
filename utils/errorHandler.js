module.exports = (res, error) => {
    res.status(500).json({
        success: false,
        message: error.message ? error.message : error
    })
}


/*
module.isMinLengthValid = (str, len) => {
    return str && str.length => len
}
*/
