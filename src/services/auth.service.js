'use strict'

const bycrypt = require('bcrypt');
const crypto = require('crypto');

const shopModel = require('@models/shop.model');
const { ROLE } = require('@constants/role.constant');

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

            return {
                code: 201,
                metadata: {
                    shop: newShop,
                    tokens
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

    login = async ({ email, password }) => {

    }
}

module.exports = new AuthService();

