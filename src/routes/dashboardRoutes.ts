import { Router, RequestHandler } from 'express';
import { getDashboard } from '../controllers/dashboardController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', protect as RequestHandler, getDashboard as RequestHandler);

export default router;