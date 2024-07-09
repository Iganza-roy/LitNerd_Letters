// main entry point for the backend server

import express from 'express';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from 'cookie-parser';
import multer from 'multer';
import cors from 'cors';

const app = express();

// Enabling CORS for frontend domain
const corsOptions = {
    origin: 'https://litnerdletters.netlify.app/',
};

app.use(cors(corseoptions))
app.use(express.json());
app.use(cookieParser());

// handling file upload with multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/upload/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({ storage })

// file upload route

app.post('/api/upload', upload.single('file'), function(req, res) {
    const file = req.file;
    res.status(200).json(file.filename) // return the filename on successful upload
})

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/posts", postRoutes);


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`connected to Backend on port ${PORT}!`);
});

