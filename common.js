const crypto = require("crypto");
const { constants } = require("./config");

exports.createHash = (data) => {
    return crypto.createHash(constants.ALGORITHM).update(data).digest(constants.DIGEST);
}