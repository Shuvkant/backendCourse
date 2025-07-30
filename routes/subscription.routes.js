import { Router } from "express";
const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {
  res.send({ title: "Get all the subscriptions" })
})

subscriptionRouter.get('/:id', (req, res) => {
  res.send({ title: "Get all the subscriptions by id" })
})
subscriptionRouter.post('/', (req, res) => {
  res.send({ title: "Create new  subscriptions" })
})
subscriptionRouter.put('/', (req, res) => {
  res.send({ title: "Modify the specific  subscriptions" })
})
subscriptionRouter.delete('/', (req, res) => {
  res.send({ title: "Delete the subscriptions" })
})

subscriptionRouter.get('/user/:id', (req, res) => {
  res.send({ title: "Get all user  subscriptions" })
})
subscriptionRouter.put('/:id/cancel', (req, res) => {
  res.send({ title: "Cancel  the subscriptions" })
})
subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  subscriptionRouter.delete('/', (req, res) => {
    res.send({ title: "Delete the subscriptions" })
  })
  res.send({ title: "Get the upcomign renewals" })
})

export default subscriptionRouter
