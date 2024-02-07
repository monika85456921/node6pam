// helperis useriui prisijungimo metu

const jwt = require("jsonwebtoken");

const User = require("../../models/userModels");

const NOT_AUTHORIZED = "Not Authorized";

const NO_TOKEN_NOT_AUTHORIZED = "not authorized, no token";

async function getUser(req) {
  if (
    req.header.authorization &&
    req.header.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.header.authorization.split(" ")[1];
      if (!token) {
        return { status: 401, response: NO_TOKEN_NOT_AUTHORIZED };
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      return { status: 200, response: user };
    } catch (err) {
      console.log(err);
      return { status: 401, response: NOT_AUTHORIZED };
    }
  }
  return { status: 401, response: NOT_AUTHORIZED };
}

module.exports = { getUser, notAuthorizedMessage: NOT_AUTHORIZED };
