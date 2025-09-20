import Subscription from "../models/subscription.model"
export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      email: req.body.email,
      user: req.user_id
    }, options)
  }
  catch (e) {
    next(e)
  }
}
