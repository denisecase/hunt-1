const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
        userid: {
            type: NumberInt,
            unique: true,
            required: true,
        },
        username: String,
    },
    { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;