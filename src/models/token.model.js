const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'Token';
const COLLECTION_NAME = 'Tokens';

// Declare the Schema of the Mongo model
var tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Shop'
    },
    publicKey: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: Array,
        default: [],
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
});

//Export the model
module.exports = model(DOCUMENT_NAME, tokenSchema);