const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validationToken = require("../middleware/validateTokenHandler");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get(
  "/current",
  //    (req,res)=>{
  //    res.json({message:"current user"})
  //}
  validationToken,currentUser
);
module.exports = router;
