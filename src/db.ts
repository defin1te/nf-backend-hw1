import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://BeibarysAssabay:946572Aaa@cluster0.vei31m6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB connected...');
    } catch (err:any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;