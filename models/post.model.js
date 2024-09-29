import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({
    desc: String,
    title: String,
    image: String,
  },{timestamps: true});

  const Image = mongoose.model('Post', imageSchema);

  export default Image