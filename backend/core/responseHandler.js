const responseHandler = ({
  statusCode,
  message = "",
  error = false,
  success = true,
  res,
  data = [],
}) => {
  res.status(statusCode).json({
    success: success,
    statusCode: statusCode,
    message: message,
    data: data,
    error: error,
  });
};

module.exports = responseHandler;
