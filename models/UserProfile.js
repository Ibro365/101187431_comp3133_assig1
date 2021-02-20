const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    user_id: Number,
    username: String,
    password: String,
    email: String
});

const UserProfile = mongoose.model("UserProfiles", UserProfileSchema);
module.exports = UserProfile;