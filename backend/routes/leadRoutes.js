import express from "express";
import Lead from "../models/lead.js";


const router = express.Router();


// POST /leads → Add a new lead
router.post("/leads", async (req, res) => {
try {
const lead = new Lead(req.body);
await lead.save();
res.status(201).json(lead);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// GET /leads → Get all leads
router.get("/leads", async (req, res) => {
const leads = await Lead.find().sort({ createdAt: -1 });
res.json(leads);
});


export default router;