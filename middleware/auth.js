const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token");

  // Check if no token

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    // Decode the token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// Ten middleware rozkodowuje jwt i wydobywa z niego id usera. Tylko id bo tylko id było w payload do generowania token
