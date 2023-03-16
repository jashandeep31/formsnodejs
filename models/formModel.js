const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    contacted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    query: {
        type: String,
    },
});

const CallBackSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    time: {
        type: Date,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    contacted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    query: {
        type: String,
    },
});

const NewsLetterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    unsubscribed: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Contact = mongoose.model("Contact", ContactSchema);
const CallBack = mongoose.model("CallBack", CallBackSchema);
const NewsLetter = mongoose.model("NewsLetter", NewsLetterSchema);

module.exports = {
    Contact,
    CallBack,
    NewsLetter,
};
