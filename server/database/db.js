import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    const URL = "mongodb+srv://ayuhadiya:ayu@cluster0.ftw8hnh.mongodb.net/";
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with databse', error.message);
    }
}

export default Connection;