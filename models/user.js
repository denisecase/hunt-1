const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // userid: {
    //     type: String,
    //     unique: true,
    //     required: true,
    // },
    username: String,
    email: String
});

// // Virtual for this team instance URL.
// userSchema
//     .virtual('url')
//     .get(function () {
//         return '';
//     });

// Compile model from schema
module.exports = mongoose.model('User', userSchema);