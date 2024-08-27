const { constent } = require('../constents');

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constent.VALIDATION_ERR:
      return res.json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stack,
      });
    
    case constent.UNAUTHERIZED:
      return res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    
    case constent.FORBIDDEN:
      return res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    
    case constent.NOTFOUND:
      return res.json({
        title: "Page Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
    
    case constent.SERVER_ERR:
      return res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    
    default:
      return res.json({ message: "No error" });
  }
};

module.exports = errorHandler;
