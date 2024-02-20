export const middlewareThree = (req, res, next) => {
  console.log("Iam from MiddlewareThree");
  next();
};
