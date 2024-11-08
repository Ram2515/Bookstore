import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import cors from 'cors';

import bookRoute from './route/book.route.js';

const app = express();

app.use(cors());

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 4001; // Use PORT from .env or default to 4001
const MongoBDURI = process.env.MongoBDURI;


//connect to mongodb

try{
    mongoose.connect(MongoBDURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("connect to mongodb")
} catch (error) {
    console.log('error:' , error)
}



// Define the root route
app.use("/book", bookRoute);

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

