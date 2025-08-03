import mongoose from "mongoose"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import User from "../models/user.model.js";
import { JWT_Expires_In, JWT_SECRET } from "../config/env.js";
export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession()
  session.startTransaction()
  try {
    // Logic for signing up a user
    if (!req.body || typeof req.body !== "object") {
      const err = new Error("Request body is required");
      err.statusCode = 400;
      throw err;
    }
    const { name, email, password } = req.body;
    //Check if the user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      const error = new Error("user already exits")
      error.statusCode = 409;
      throw error
    }

    // hasing the passwrod
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUsers = await User.create([{ name, email, password: hashedPassword }], { session })
    const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, { expiresIn: JWT_Expires_In })
    await session.commitTransaction()
    session.endSession()

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token,
        user: newUsers[0],
      }


    })
  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    next(error)
  }
}

export const signIn = async (req, res, next) => {
}
export const signOut = async (req, res, next) => {
}
export const refreshToken = async (req, res, next) => {
}
