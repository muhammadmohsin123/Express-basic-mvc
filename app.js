const express = require("express");
const app = express();
const friendsConroller = require("./controllers/friends.controller");
app.use((req, res, next) => {
  console.log("Hello from middleware");
  next();
});
app.use(express.json());

app.get("/", friendsConroller.getFriends);
app.get("/friends/:id", friendsConroller.getOneFriend);
app.post("/", friendsConroller.postFriend);

app.listen(3000, () => {
  console.log("listening...");
});
