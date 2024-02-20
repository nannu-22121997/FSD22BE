export const middlewareTwo = (req, res, next) => {
  console.log("Iam from MiddlewareTwo");
  next();
};
