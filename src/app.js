/* eslint-disable no-undef */
import dotenv from 'dotenv'
import express from 'express'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config({ path: '../.env' });

const app = express();
app.use(cors())
//Set the number of the Port
const port = process.env.PORT || 5056;

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes);

// 
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
