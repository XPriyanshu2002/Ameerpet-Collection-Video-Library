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
