export const error = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "internal servere error ";
  res.json({
    success: false,
    statusCode,
    message,
  });
};
