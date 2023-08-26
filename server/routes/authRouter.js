import express from 'express';
import { signUpUser } from '../controllers/auth.js';

const router = express.Router();

router.post("/signUp", signUpUser);



export default router;