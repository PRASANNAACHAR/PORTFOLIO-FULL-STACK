import express from 'express';
import { login, logout, register, getUser, updateProfile, updatePassword, getUserPortfolio, forgotPassword, resetPassword } from '../controller/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/logout",isAuthenticated,logout);
router.get("/me",isAuthenticated,getUser);
router.put("/update/me",isAuthenticated,updateProfile);
router.put("/update/password",isAuthenticated,updatePassword);
router.get("/portfolio/me", isAuthenticated, getUserPortfolio);

router.post("/password/forgot",forgotPassword);
router.put("/password/reset/:token",resetPassword);


export default router;