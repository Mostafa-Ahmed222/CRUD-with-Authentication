import userModel from "../../../DB/model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, cpassword, age } = req.body;
  try {
    if (password === cpassword) {
      const hash = await bcrypt.hash(password, parseInt(process.env.saltRound));
      const user = await userModel.findOne({email})
      if (!user) {
        const user = new userModel({
            firstName,
            lastName,
            email,
            password: hash,
            age,
          });
          const savedUser = await user.save();
          res.json({ message: "Done", userId: savedUser._id });
      } else {
        res.json({ message: "email exist" });
      }
    } else {
      res.json({ message: "password not match with CPassword" });
    }
  } catch (error) {
    res.json({ message: "Catch error", error });
  }
};
export const signin = async(req, res)=> {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
    if (!user) {
        res.json({message : "in-valid account"})
    } else {
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            res.json({message : "in-valid account"})
        } else {
            const token = jwt.sign({id : user._id}, process.env.signatureToken, {
                expiresIn : '1h'
            })
            res.json({message : "Done", token})
        }
    }
    } catch (error) {
        res.json({message:"Catch error", error})
    }
}

