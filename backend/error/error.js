//the error handling class
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "internal server error";
  err.statusCode = err.statusCode || 500;
  return res.status(err.statusCode).json({
    success: false, //success failure results in error
    message: err.message,
  });
  //error status is returned
};
export default ErrorHandler;
