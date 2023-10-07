
const JWT = require('jsonwebtoken');

const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        const accessToken = await JWT.sign(payload, privateKey, {
            algorithm: 'RS256',
            expiresIn: '2 days'
        });

        const refreshToken = await JWT.sign(payload, privateKey, {
            algorithm: 'RS256',
            expiresIn: '7 days'
        });

        JWT.verify(accessToken, publicKey, (_, decode) => {
            console.log('decode token::', decode);
        })

        return { accessToken, refreshToken };
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createTokenPair
}