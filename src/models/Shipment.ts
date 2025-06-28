import mongoose, { Document, Schema } from 'mongoose';

export interface IShipment extends Document {
  user: mongoose.Types.ObjectId;
  date: Date;
  status: string;
  quantity: number;
}

const shipmentSchema = new Schema<IShipment>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Shipment = mongoose.model<IShipment>('Shipment', shipmentSchema);

export default Shipment;
