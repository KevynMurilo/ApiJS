import mongoose from "mongoose"

mongoose.connect("mongodb+srv://kevynmurilo:Kevynmurilo12@crud.k6vca1t.mongodb.net/crud");

let db = mongoose.connection;

export default db;