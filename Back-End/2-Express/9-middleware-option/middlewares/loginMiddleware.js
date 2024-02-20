export const loginMiddleware = (req, res, next) => {
  const { username } = req.query; // { "username" : "NaveenKumar" }
  //   console.log(username);
  if (username === "Naveen Kumar") {
    req.username = "Naveen Kumar";
    next();
  }
  res.status(401).send(`<h1>Unauthorized Access</h1>
  <a href="/">Go Back to Home Page.</a>`);
};
