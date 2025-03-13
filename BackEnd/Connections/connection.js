<<<<<<< HEAD
// import mongoose from "mongoose";

// export default async () => {
//     try {
//         const db = await mongoose.connect(process.env.MongoUrl, {
//             dbName: "AmeerpetCollection",
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "AmeerpetCollection",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
=======
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
>>>>>>> 8bee3392ef3ad92adb89f6f71c3da7c152bae273
