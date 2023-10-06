'use strict'

const tokenModel = require("../models/token.model");

class TokenService {
    create = async ({ userId, publicKey }) => {
        try {
            const publicKeyString = JSON.stringify(publicKey);
            const tokens = tokenModel.create({
                userId: userId,
                publicKey: publicKeyString
            })
            return tokens ? publicKeyString : null;
        } catch (error) {
            return error;
        }
    }
}

module.exports = new TokenService();