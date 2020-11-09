const mongoose = require("mongoose");
const { model } = require("./team");

const userSchema = new mongoose.Schema({
        userid: {
            type: Number,
            unique: true,
            required: true,
        },
        username: String,
    },
    { timestamps: true },
);

// Virtual for this team instance URL.
userSchema
    .virtual('url')
    .get(function () {
        return '';
    });

model.exports = mongoose.model('User', userSchema);