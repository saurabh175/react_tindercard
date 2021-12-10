import mongoose from "mongoose";

const dbSchema = mongoose.Schema({
    name: String,
    url: String
})
export default mongoose.model(`data`, dbSchema);