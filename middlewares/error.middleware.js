const errorMiddlewares = (err, req, res, next) => {
  try {
    let error = { ...err }
    error.message = err.message;
    console.error(err)

    //Mongoose bad ObjectId
    if (err.name === 'CastError') {
      const message = 'Resource not found';
    }

    // MOngoose duplicate key
    if (err.code === 11000) {
      const message = "Duplicate field value entered"
      error = new Error(message);
      error.statusCode = 400;
    }
    // Mongoose validation error
    if (err.name === "validationError") {
      const message = Object.values(err.erros).map(val => val.message);
      error = new Error(message.join(','));
      error.statusCode = 400;
    }
    res.status(err.statusCode || 500).join({ success: false, error: error.message || "server error" })
  } catch (error) {
    next(error)
  }
};

export default errorMiddlewares
