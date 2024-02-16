const express = require("express");
/*
    All the routes need to handle is what to do with the request and response and what managers to call. 
    They will only communicate with the the req and res object, and managers interfaces.
*/

const router = express.Router();
const UserManager = require("../Managers/UserManager.js");

// USER:

//Create user account
router.post("/create", async (req, res) => {
  const user = await UserManager.createUser(req.body);
  if (user == null) {
    res.send("Error: null.");
  }
  res.send(user);
});

///Update user account
router.patch("/update", async (req, res) => {
  res.send("update user account");
});

//Delete user account
router.delete("/delete", async (req, res) => {
  res.send("deleting user.");
});

//Get user Info
router.get("/getInfo", async (req, res) => {
  res.send("getting use Informaton.");
});

//Get all user
router.get("/getAll/", async (req, res) => {
  const users = await UserManager.getAll(req.body.password, req.body.passphrase);
  if (users == null) {
    res.send("Error: null.");
  }
  res.send(users);
});

// PRODUCTS:

//Add product to sell
router.post("/addProduct", async (req, res) => {
  res.send("add product.");
});

//Remove product to sell
router.delete("/removeProduct", async (req, res) => {
  res.send("remove product");
});

// INVITES:

//Send Invite
router.post("/invite/:userId", async (req, res) => {
  const user = await UserManager.sendInvite(req.params.userId);
  if (user == null) {
    res.send("Error: null.");
  }
  res.send(user);
});

//Accept Invite
router.post("/invite/accept/:cartId", async (req, res) => {
  const user = await UserManager.acceptInvite(req.params.cartId);
  if (user == null) {
    res.send("Error: null.");
  }
  res.send(user);
});

// Do we need this?
//Receive Invite 
router.get("/invite", async (req, res) => {
  res.send("recieved invite");
});

module.exports = router;
