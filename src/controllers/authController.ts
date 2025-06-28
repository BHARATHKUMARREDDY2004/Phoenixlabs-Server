import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';


export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
        expiresIn: '30d',
      });
      res.json({
        token,
        user: {
          fullName: user.fullName,
          patientId: user.patientId,
          currentPlan: user.currentPlan,
          nextDeliveryDate: user.nextDeliveryDate,
          remainingMedication: user.remainingMedication,
          status: user.status,
          billingStatus: user.billingStatus,
        },
      });
    } else {
      res.status(401).json({ message: 'Invalid Email or Password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      patientId: `PID${Math.floor(100000 + Math.random() * 900000)}`, // random 6-digit
      currentPlan: 'Monthly',
      nextDeliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // +7 days
      remainingMedication: 30,
      status: 'active',
      billingStatus: 'OK',
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
        expiresIn: '30d',
      });

    res.status(201).json({
      token,
      user: {
        fullName: user.fullName,
        patientId: user.patientId,
        currentPlan: user.currentPlan,
        nextDeliveryDate: user.nextDeliveryDate,
        remainingMedication: user.remainingMedication,
        status: user.status,
        billingStatus: user.billingStatus,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

