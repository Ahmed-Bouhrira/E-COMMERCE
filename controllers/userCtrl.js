const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await Users.findOne({ email });
      // Conditional validation of email and password :
      if (user)
        return res.status(400).json({ message: "email already in use" });
      if (password.length < 6)
        return res
          .status(400)
          .json({ message: "password too short ,at least 6 characters" });

      // Password encryption :
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        name,
        email,
        password: passwordHash
      });
      // res.json({ message: "register success" });
      res.json({ newUser });
    } catch (err) {}
  }
};

module.exports = userCtrl;
