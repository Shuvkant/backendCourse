import express from "express"
import { PORT } from "./config/env.js"
const app = express();

app.get('/', (req, res) => {
  res.send("Welcome to the backend course.")
})

app.listen(PORT, () => {
  console.log(`App is running in port ${PORT}`)
})

export default app
