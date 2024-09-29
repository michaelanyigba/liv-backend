import mongoose from "mongoose";

const counsellorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    phone:{
        type: String,
        required: true,
    },
    bio:{
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
}, {timestamps: true})

const Counsellors = mongoose.model("Counsellors", counsellorsSchema)

export default Counsellors