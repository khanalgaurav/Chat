import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js";
export const protectRoute = async (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "unauthorized - No Token Provided",
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "unauthorized - Invalid Token",
      });
    }
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in Protect route middleware", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
