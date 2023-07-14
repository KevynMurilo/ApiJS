import mongoose from "mongoose"

mongoose.connect("mongodb+srv://<url-do-servidor-atlas>");

let db = mongoose.connection;

export default db;
