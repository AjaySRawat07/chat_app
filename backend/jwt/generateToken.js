import jwt from "jsonwebtoken";

export const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "365d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss
    secure: true,
    sameSite: "strict", // csrf
  });
  console.log(token);
};
