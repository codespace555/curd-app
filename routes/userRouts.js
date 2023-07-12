const express = require("express");

const {home, createUser, getUsers, deleteUser,editUser} = require('../controllers/userController.js')
const router = express.Router(); //importing the app from index file and using it's property of "router" to create a router
router.get("/", home);
router.post("/createuser", createUser);
router.get("/readusers", getUsers);
router.delete('/deleteuser/:id', deleteUser)
router.put('/updateuser/:id', editUser)



module.exports = router;
