import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async (req, res, next) => {
  try {
    // Ensure req.cookies is available after using cookie-parser
    const token = req.cookies.jwt;
    console.log("Token in secureRoute middleware:", token);  // Log token for debugging

    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Find user by decoded token
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "No user found" });
    }

    // Attach user to the request object
    req.user = user;

    next();

  } catch (error) {
    console.log("Error in secureRoute middleware:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default secureRoute;
