import { Request, Response } from 'express';
import User from '../models/User';

export const getDashboard = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized, no user found' });
    }
    const user = await User.findById(req.user.id).select('-password');
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User Not Found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
