import { Router, RequestHandler } from 'express';
import { loginUser, registerUser } from '../controllers/authController';

const router = Router();

router.post('/login', loginUser as RequestHandler);
router.post('/register', registerUser as RequestHandler); 

export default router;
