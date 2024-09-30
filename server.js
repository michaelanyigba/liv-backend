import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
import bodyParser from "body-parser"
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const imagesPath = path.join(__dirname, 'controllers', 'images')

app.use('/images', express.static(imagesPath))

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import counsellorsRoutes from "./routes/counsellors.routes.js"
import postRoutes from "./routes/post.routes.js"
import articlesRoutes from "./routes/articles.routes.js"


import connectToMongoDB from "./db/connectToMongodb.js"
const PORT = process.env.PORT || 5000

import cookieParser from "cookie-parser"
import { app, server } from "./socket/Socket.js"
import { fileURLToPath } from "url"

app.use(express.json());
app.use(cookieParser())
app.use(cors());    
app.use(bodyParser.json());

app.use("/api/auth", authRoutes); //
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/counsellors", counsellorsRoutes);
app.use("/api/articles", articlesRoutes);

app.use("/api/post", postRoutes); 

app.get("/", (req, res)=>{
    res.json({message: "hello from backend"})
})

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)
});