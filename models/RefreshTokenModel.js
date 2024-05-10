import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema({
    userRef: {
        type: String,
        ref: 'users',
        required: true,
        index: true,
    },
    loginTime: {
        type: Date,
        required: true,
    },
    token: {
        type: String,
        required: true,
        index: true,
    },
});

const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);

export default RefreshToken;