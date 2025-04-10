import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import messageRoutes from './routes/messageRoutes.js'

// Load environment variables (like MONGO_URI, PORT, etc.)
dotenv.config()

// Create an instance of an Express app
const app = express();
// Use the PORT from environment variables or default to 9999
const PORT = process.env.PORT || 9999

// Configure CORS to allow requests from specific origins
const allowedOrigins = ['http://localhost:5173'];

// Middleware to enable CORS with specific options
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

app.use(cors(corsOptions))

// Middleware to parse incoming JSON requests
app.use(express.json())
// Middleware to parse URL-encoded data (from forms, etc.)
app.use(express.urlencoded({ extended: true }))

// Connect to the MongoDB database

connectDB()

// Use the imported routes for specific API endpoints
app.use('/api/products', productRoutes)
app.use('/api/messages', messageRoutes)

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
