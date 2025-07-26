import express from "express"

const app = express();

app.get('/', (req, res) => {
  res.send("Welcome to the backend course")
})

app.listen(3000, () => {
  console.log("App is running in port 3000")
})

export default app
