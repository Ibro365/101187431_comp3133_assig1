const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const UserProfile = mongoose.model("UserProfiles", UserProfileSchema);
module.exports = UserProfile;