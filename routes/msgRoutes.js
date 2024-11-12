import express from 'express';
import msgController from '../controllers/chatController.js';

const router = express.Router();

router.post('/sendMessage', async (req, res) => {
    try {
        const { userID ,sessionID, message, selectedModel } = req.body;
        
        await msgController(userID, sessionID, message, selectedModel);
        
        res.status(200).json({message:"Message successfully sent" });
    } catch (error) {
        console.error("messageHandler controller error",error);
        res.status(500).json({error:"Failed to fetch models"});
    }
})

export default router;