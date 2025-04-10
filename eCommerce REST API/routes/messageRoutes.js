import express from 'express'
import { sendMessage } from '../controllers/messageControllers.js'

// Create a new router instance
const router = express.Router()

// Define a POST route at the root path ("/")
// When a POST request is made, it will run the sendMessage function
router.post('/', sendMessage)

export default router