import signUpController from "../controllers/SignUpcontroller.js";
import upload from "../middlewares/UploadMiddleware.js";
import express from "express";
const router = express.Router();

router.post("/signup", upload.single("profilePhoto"), signUpController);

export default router;
