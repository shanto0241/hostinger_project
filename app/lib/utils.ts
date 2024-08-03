import mongoose from "mongoose";

interface Connection {
    isConnected? : boolean;
}

export const connectToDb = async (): Promise<void> => {
    const connection: Connection = {};
    
    try {
        if (connection.isConnected) {
            console.log("already connected");
            return;
        }
        const db = await mongoose.connect(process.env.mongo_uri as string);
        connection.isConnected = db.connections[0].readyState === 1; //readyState maeans connected
        console.log("Connected to MongoDB database!"); // Informative message
    } catch (error) {
        console.error(error)// Clear error logging
        throw new Error("Error connecting to MongoDB:"); ; // Re-throw the error for potential handling elsewhere
    }
};
