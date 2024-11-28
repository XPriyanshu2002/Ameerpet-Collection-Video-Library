import mongoose from "mongoose";

export default async () => {
    try {
        // Use a descriptive environment variable name, like `MONGO_URI`
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
        return db;
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); // Exit the process with failure code
    }
};
