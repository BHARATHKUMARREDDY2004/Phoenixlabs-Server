import { Router, RequestHandler } from 'express';
import { getShipments } from '../controllers/shipmentController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', protect as RequestHandler, getShipments as RequestHandler);

export default router;
