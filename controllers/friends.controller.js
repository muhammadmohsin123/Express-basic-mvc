const friends = require("../models/friends.model");
function getFriends(req, res) {
  res.send(friends);
}

function getOneFriend(req, res) {
  let friend = friends[+req.params.id];
  res.send(friend);
}

function postFriend(req, res) {
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);
  res.send(newFriend);
}
module.exports = {
  getFriends,
  getOneFriend,
  postFriend,
};
