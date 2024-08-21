const express = require("express");
const router = express.Router();
const Cont = require("../models/Cont");
const { sendMail } = require("../helpers/sendMail");
const { ContactHtml } = require("../helpers/ContactHtml");

router.post("/contact", async (req, res) => {
  try {
    await Cont.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      message: req.body.message,
    });
    const recipients = [req.body.email, "debidatta.learnforcause@gmail.com", "info@aeroquestuav.com"];
    sendMail(
      recipients,
      req.body.fname + " " + req.body.lname + "'s " + "Response",
      "",
      ContactHtml(
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.message
      )
    );
    res.json({ success: true });
  } catch (error) {
    console.log("errorrrr", error);
    res.json({ success: false });
  }
});

module.exports = router;
