// servoStatusModel.js
import mongoose from 'mongoose';

const servoStatusSchema = new mongoose.Schema({
status: { type: Boolean}
},{
    timestamps: true,
    versionKey: false
});

const ServoStatus = mongoose.model('ServoStatus', servoStatusSchema);

export default ServoStatus;
