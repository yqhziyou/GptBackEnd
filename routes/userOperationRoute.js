import express from 'express';
import {register, login, addSession, removeSession} from '../controllers/userController.js';

const router = express.Router();

// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/login', login);

// Route to add a session to the user's session list
router.post('/add-session', addSession);

// Route to delete a session to user
router.post('/remove-session', removeSession);

export default router;