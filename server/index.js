import express from "express"
import postRouter from "./routes/posts.js";
import cors from "cors";
import multer from "multer";
const app = express()

app.use(express.json())
app.use(cors());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now()+file.originalname)
  }
})
const upload = multer({ storage })


app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = res.file;
  res.status(200).json("img uploded")
})

app.use("/api/posts", postRouter)


app.listen(8000, () => {
    // console.log(postRoutes)
console.log("server connected")
})