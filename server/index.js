import express from "express"
import postRouter from "./routes/posts.js";
import cors from "cors";
import multer from "multer";
const app = express()

app.use(express.json())
app.use(cors());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("reqfiles!!!!!!!!!!", file)
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now()+file.originalname)
  }
})
const upload = multer({ storage })


// app.post('/api/upload', upload.array('images', 10), function (req, res) {
//   console.log("index",  req.file);
//   const file = req.file;
//   res.status(200).json(file.filename)
// })

const cpUpload = upload.fields([
  { name: 'titleimg', maxCount: 1 },
  { name: 'compimg', maxCount: 1 },
  { name: 'sysAImg', maxCount: 1 },
  { name: 'sysSetupImg1', maxCount: 1 },
  { name: 'sysSetupImg2', maxCount: 1 },
  { name: 'sysSetupImg3', maxCount: 1 },
  { name: 'impImg', maxCount: 1 },
  { name: 'impImg2', maxCount: 1 },
  { name: 'impImg3', maxCount: 1 },
  { name: 'impImg4', maxCount: 1 }
]);

app.post('/api/upload', cpUpload , function (req, res) {
  console.log("Uploaded files:", req.files);
  const filenames = {};
  for (const fieldName in req.files) {
    filenames[fieldName] = req.files[fieldName].map(file => file.filename);
  }
  
  res.status(200).json({ filenames });
});

app.use("/api/posts", postRouter)


app.listen(8000, () => {
    // console.log(postRoutes)
console.log("server connected")
})