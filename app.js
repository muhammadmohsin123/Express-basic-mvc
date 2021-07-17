const express = require("express");
const app = express();
const friendsRouter = require("./Routes/friendsRouter.routes");

//Middleware
app.use((req, res, next) => {
  console.log("Hello from middleware");
  next();
});
app.use(express.json());

//Mounting a Router
app.use("/friends", friendsRouter);

//Server
app.listen(3000, () => {
  console.log("listening...");
});
