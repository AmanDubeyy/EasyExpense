import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (e) {
        console.log("Failed to connect mongo" + e.message);
    }
}

export default connectDB;