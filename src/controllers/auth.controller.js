'use strict'

const { shopModel } = require('../models');
const authService = require('../services/auth.service');

class AuthController {

    signUp = async (req, res, next) => {
        try {
            const response = await authService.signUp(req.body);
            return res.status(201).json(response);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController();