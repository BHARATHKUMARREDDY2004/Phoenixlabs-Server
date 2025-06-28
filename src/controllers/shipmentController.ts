import { Request, Response } from 'express';
import Shipment from '../models/Shipment';

export const getShipments = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized, no user found' });
    }
    const shipments = await Shipment.find({ user: req.user.id });
    res.json(shipments);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
