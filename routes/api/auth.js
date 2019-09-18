const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get("/", auth, (req, res) => res.send(req.user));

module.exports = router;
