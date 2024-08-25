const {constent}=require('../constents')
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constent.VALIDATION_ERR:
      res.json({
        title: "vaildation error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constent.UNAUTHERIZED:
      res.json({
        title: "unautherrized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constent.FORBIDDEN:
      res.json({
        title: "forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constent.NOTFOUND:
      res.json({
        title: "page not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constent.SERVER_ERR:
      res.json({
        title: "server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
        res.json({message:"no error"})
      break;
  }
  res.json({ message: err.message, stackTrace: err.stack });
};
module.exports = errorHandler;
