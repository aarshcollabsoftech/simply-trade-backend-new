const User = require("../models/user");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

/************************  Sign Up ****************************/
exports.signup = async (req, res) => {
  try {
    const { name, email, phone, isBlock, role, password } = req.body;

    const userCheck = await User.findOne({ email });
    if (userCheck) {
      return res.status(400).json({
        error: true,
        message: "User already exists with the email-Id.",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const bcryptPass = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      phone,
      isBlock,
      role,
      password: bcryptPass,
    });

    JWT_DATA = {
      userId: user.id,
      role: user.role,
    };

    const token = JWT.sign(JWT_DATA, process.env.JWT_SECRET_KEY);

    return res.status(200).json({
      error: false,
      message: "User Sign Up Successful. ",
      data: user,
      token,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/*************************** Login *****************************/

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "Incorrect Login Credentials." });
    }

    if (user.isBlock == "1" || user.isDelete == "1") {
      return res.status(400).json({
        error: true,
        message: "You can't Login !! Contact your admin.",
      });
    }

    if (user.role == "U") {
      const checkAdmin = await User.findById(user.adminId);

      if (checkAdmin.isBlock == "1" || checkAdmin.isDelete == "1") {
        return res.status(400).json({
          error: true,
          message: "You can't Login !! Contact your admin.",
        });
      }
    }

    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return res
        .status(400)
        .json({ error: true, message: "Incorrect Login Credentials." });
    }

    JWT_DATA = {
      userId: user.id,
      role: user.role,
    };
    const token = JWT.sign(JWT_DATA, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });

    return res
      .status(200)
      .json({ error: false, message: "User Login Successful.", token, user });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

/***************************  Forgot Password  ****************************/

exports.forgotpassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "Incorrect Credentials." });
    }

    JWT_DATA = {
      userId: user.id,
    };

    const token = JWT.sign(JWT_DATA, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({
        error: false,
        token,
        message:
          "Password reset link sent successfully to your registered email-Id.",
      });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/***************************  Reset Password  ****************************/

exports.resetpassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    var decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
    const { userId } = decoded;
    const salt = await bcrypt.genSalt(10);
    const bcryptPass = await bcrypt.hash(password, salt);

    await User.findByIdAndUpdate(
      userId,
      { password: bcryptPass },
      { new: true }
    );

    return res
      .status(200)
      .json({ error: false, message: "Password Reset Successfully." });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/********************************** Get User By Token **************************/

exports.getuserbyToken = async (req, res) => {
  try {
    const { token } = req.params;
    var decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
    const { userId } = decoded;

    const user = await User.findById(userId);

    return res
      .status(200)
      .json({ error: false, message: "Get user by token", data: user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
