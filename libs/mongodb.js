import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB.")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB;

// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true, // Add this line for index support
//             useFindAndModify: false, // Add this line to disable findAndModify
//         });
//         console.log("Connected to MongoDB.")
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//         process.exit(1); // Exit the process if unable to connect
//     }
// }

// export default connectMongoDB;
