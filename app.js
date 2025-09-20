import express, { urlencoded } from 'express'
import { PORT } from './config/env.js'

import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import connectToDatabase from './database/mongodb.js'
import errorMiddlewares from './middlewares/error.middleware.js'
import cookieParser from 'cookie-parser'
// import { JWT_Expires_In, JWT_SECRET } from '../config/env.js'
import { JWT_EXPIRES_IN, JWT_SECRET } from './config/env.js'
import arcjetMiddleware from './middlewares/arcjet.middleware.js'

const app = express()

app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(arcjetMiddleware)


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscription', subscriptionRouter)
app.use(errorMiddlewares)

app.get('/', (req, res) => {
  res.send('Welcome to the backend course. Shuvkant Chaudhary Phanait. Its 3rd Ashoj')
})
app.get('/learning/', (req, res) => {
  res.send(req.body)
})

app.listen(PORT, async () => {
  console.log(`App is running in port  http://localhost:${PORT}`)
  console.log(`JWT_Expires_In: ${JWT_EXPIRES_IN}`)
  console.log(`JWT_SECRET: ${JWT_SECRET}`)
  await connectToDatabase()
})

export default app
