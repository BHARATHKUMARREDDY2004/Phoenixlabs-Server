import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  patientId: string;
  currentPlan: string;
  nextDeliveryDate: Date;
  remainingMedication: number;
  status: 'active' | 'inactive';
  billingStatus: 'OK' | 'Pending';
}

const userSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  patientId: { type: String, required: true, unique: true },
  currentPlan: { type: String, required: true },
  nextDeliveryDate: { type: Date, required: true },
  remainingMedication: { type: Number, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  billingStatus: { type: String, enum: ['OK', 'Pending'], default: 'OK' },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
