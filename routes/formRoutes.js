const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");
// const User = require("../models/userModel");

router.route("/contact/:id").post(formController.ContactForm);
router.route("/callback/:id").post(formController.CallBackForm);

// router.get("/", async (req, res) => {
//     await User.create({
//         name: "greensweep",
//         email: "support@greensweep.in",
//         password: "123456",
//     });
//     res.send("Hello World!");
// });

module.exports = router;
