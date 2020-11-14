const mongoose = require("mongoose")
//const { model } = require("./user");

const teamSchema = new mongoose.Schema({
    teamid: {
        type: Number,
        unique: true,
        required: true,
    },
    // creatoruserid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    teamname: {
        type: String,
        unique: true,
        required: true
    }
});

// // Virtual for this team instance URL.
// teamSchema
//     .virtual('url')
//     .get(function () {
//         return '';
//     });

// Export model.
module.exports = mongoose.model('Team', teamSchema);