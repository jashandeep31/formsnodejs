const { Contact, CallBack, NewsLetter } = require("../models/formModel");
const User = require("../models/userModel");
exports.ContactForm = async (req, res) => {
    const { first_name, last_name, phone, email, query } = req.body;
    const user = await User.findById(req.params.id);
    if (!user)
        return res
            .status(400)
            .json({ status: "fail", message: "User not found" });
    try {
        const contact = await Contact.create({
            first_name,
            last_name,
            phone,
            email,
            query,
        });
        res.status(200).json({
            status: "success",
            data: {
                contact,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

exports.CallBackForm = async (req, res) => {
    const { first_name, last_name, phone, email, time, query } = req.body;
    const user = await User.findById(req.params.id);

    if (!user)
        return res
            .status(400)
            .json({ status: "fail", message: "User not found" });
    try {
        const callback = await CallBack.create({
            first_name,
            last_name,
            phone,
            email,
            time,
            query,
        });
        res.status(200).json({
            status: "success",
            data: {
                callback,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};
exports.NewsLetterForm = async (req, res) => {
    const { email } = req.body;
    const user = await User.findById(req.params.id);
    if (!user)
        return res
            .status(400)
            .json({ status: "fail", message: "User not found" });
    try {
        const newsletter = await NewsLetter.create({
            email,
        });
        res.status(200).json({
            status: "success",
            data: {
                newsletter,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};
