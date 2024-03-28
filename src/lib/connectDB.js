import mongoose from "mongoose";

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); 

        console.log('connection to mongoDB successfull');
    } catch (e) {
        console.log("Failed to connect mongo" + e.message);
    }
}

export default connectDB;