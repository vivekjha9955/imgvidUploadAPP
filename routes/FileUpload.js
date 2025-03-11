const express=require("express");
const router=express.Router();

const{imageUpload,videoUpload,imageSizeReducer,localFileUpload}=require("../controllers/fileUpload")

router.post("/imageUpload",imageUpload)
// router.post("/videoUpload",videoUpload)
router.post("/imageReducerUpload",imageSizeReducer)
router.post("/localfileUpload",localFileUpload)
router.post("/videoUpload",videoUpload)

module.exports=router;

