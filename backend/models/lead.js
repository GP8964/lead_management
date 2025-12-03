import mongoose from "mongoose";


const leadSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
status: {
type: String,
enum: ["New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"],
default: "New"
},
createdAt: { type: Date, default: Date.now }
});


export default mongoose.model("Lead", leadSchema);