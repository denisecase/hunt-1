const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    teamid: {
        type: NumberInt,
        unique: true,
        required: true,
    },
    creatoruserid: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ],
    teamname: {
        type: String,
        unique: true
    },
},
{ timestamps: true },
);

const User = mongoose.model('Team', userSchema);

export default User;