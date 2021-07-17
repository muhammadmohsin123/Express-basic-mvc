const express = require("express");
const friendsRouter = express.Router();
const friendsConroller = require("../controllers/friends.controller");

//Routes
friendsRouter.get("/", friendsConroller.getFriends);
friendsRouter.get("/:id", friendsConroller.getOneFriend);
friendsRouter.post("/", friendsConroller.postFriend);

module.exports = friendsRouter;
