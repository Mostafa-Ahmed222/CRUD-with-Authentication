import jwt from "jsonwebtoken";
import userModel from "../DB/model/User.js";

export const auth = () => {
  return async (req, res, next) => {
    try {
      const { headertoken } = req.headers;
      if (headertoken.startsWith(process.env.BearerKey)) {
        const token = headertoken.split(process.env.BearerKey)[1];
        const decoded = jwt.verify(token, process.env.signatureToken);
        if (decoded && decoded.id) {
          const user = await userModel
            .findById(decoded.id)
            .select("_id firstName email");
            if (user) {
                req.authUser = user
                next()
            } else {
                res.json({ message: "in-valid token id" });
            }
        } else {
          res.json({ message: "in-valid payload" });
        }
      } else {
        res.json({ message: "in-valid Bearer token" });
      }
    } catch (error) {
      res.json({ message: "catch error", error });
    }
  };
};
