import mongoose from "mongoose";

const articlesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    content: {
        type: String,
        required: true,

    },
}, {timestamps: true})

const Articles = mongoose.model("Articles", articlesSchema)

export default Articles