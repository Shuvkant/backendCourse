import express, { urlencoded } from "express"
import { PORT } from "./config/env.js"

import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import connectToDatabase from "./database/mongodb.js"
import errorMiddlewares from "./middlewares/error.middleware.js"
import cookieParser from "cookie-parser"

const app = express();

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscription', subscriptionRouter)
app.use(errorMiddlewares)
app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send("Welcome to the backend course. Shuvkant Chaudhary Phanait")
})

app.listen(PORT, async () => {
  console.log(`App is running in port  http://localhost:${PORT}`)
  await connectToDatabase()

})

export default app
