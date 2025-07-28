import { Router } from "express";

const userRouter = Router()

userRouter.get("/", (req, res) => {
  res.send({ title: "get all the users" })
})

userRouter.get("/:id", (req, res) => {
  res.send({ title: "Get  the specific user" })
})

userRouter.post("/", (req, res) => {
  res.send({ title: "Create a new user" })
})

userRouter.put("/:id", (req, res) => {
  res.send({ title: "Modify the existing user" })
})
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delte a specific user." })
})
export default userRouter
