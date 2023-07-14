import mongoose from "mongoose"

mongoose.connect("mongodb+srv://<USERNAME>:<PASSWORD>@<HOST>/<DATABASE>");

let db = mongoose.connection;

export default db;
