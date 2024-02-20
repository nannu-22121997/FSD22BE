export const middlewareOne = (req, res, next) => {
  console.log("Iam from MiddlewareOne");
  next();
};
