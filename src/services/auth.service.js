'use strict'

const { shopModel } = require('../models');
const bycrypt = require('bcrypt');
const tokenService = require('./token.service');
const crypto = require('crypto');
const { createTokenPair } = require('../utils');

const ROLE = Object.freeze({
    ADMIN: 'ADMIN',
    USER: 'USER'
})

class AuthService {
    signUp = async ({ name, email, password }) => {
        try {
            const shop = await shopModel.findOne({ email }).lean();

            if (shop) {
                return {
                    code: '400',
                    message: 'Shop already registered!',
                    status: 'error'
                }
            }

            const passwordHash = await bycrypt.hash(password, 10);

            const newShop = await shopModel.create({
                name,
                email,
                password: passwordHash,
                roles: [ROLE.ADMIN]
            });

            if (newShop) {
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                });
                console.log({ privateKey, publicKey })
                const publicKeyString = await tokenService.create({
                    userId: newShop._id,
                    publicKey
                })

                if (!publicKeyString) {
                    return {
                        code: '000',
                        message: 'error'
                    }
                }

                const tokens = await createTokenPair({ userId: newShop._id, email }, publicKey, privateKey);
                console.log('create token success', tokens);

                return {
                    code: 201,
                    metadata: {
                        shop: newShop,
                        tokens
                    }
                }
            }


        } catch (error) {
            return {
                code: '000',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = new AuthService();