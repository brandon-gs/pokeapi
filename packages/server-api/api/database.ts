import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bgspokemon");

const connection = mongoose.connection;

connection.once("open", () => {
  console.log(">> DB is connected");
});

export default mongoose;
