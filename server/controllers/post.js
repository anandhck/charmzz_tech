import { executeQuery } from "../database/db.js";



// Controller function to get posts
export const getPosts = async (req, res) => {
    try {
        const gpost = "SELECT * FROM blogs";
        const posts = await executeQuery(gpost);
        console.log("datacheck", posts);
        return res.status(200).json(posts);
    } catch (err) {
        console.error("Error fetching posts:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
export const getPost =  async (req, res) => {
     try {
         const getSinglePost = `SELECT * FROM blogs WHERE id = ${req.params.id}`;
         console.log("req.params", req.params.id)
        const posts = await executeQuery(getSinglePost);
        console.log("datacheck", posts);
        return res.status(200).json(posts);
    } catch (err) {
        console.error("Error fetching posts:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json("from controller")
}
// export const addPost = async (req, res) => {
//     try {
//         console.log("extractImageNamescccccccccc")
//         // Function to extract image names from an array of file paths
//         const extractImageNames = (filePaths) => {
//             return filePaths.map(filePath => {
//                 const parts = filePath.split('/');
//                 return parts[parts.length - 1];
//             });
//         };

//         // req.body.img.filenames contains all the file path arrays
//         const imgFilenames = req.body.img.filenames;

//         // Extracting image names for each array
//         const exactImageNames = {};
//         for (const key in imgFilenames) {
//             if (imgFilenames.hasOwnProperty(key)) {
//                 const filePathArray = imgFilenames[key];
//                 exactImageNames[key] = extractImageNames(filePathArray);
//             }
//         }
//         console.log("Exact image names:", exactImageNames);
//         console.log("exactImageNames!!", exactImageNames.titleimg)
//         console.log("db res", res)
//         const sqlInsert = `
//   INSERT INTO posts (
//     title,
// content,
//     \`desc\`,
//     date,
//     cat,
//     objectives,
//     architecturedesc,
//     component,
//     systemSetup,
//     systemSetupdescription,
//     systemSecondSetupdescription,
//     systemSetupThreedescription,
//     systemImpledescription,
//     systemImpledescriptionTwo,
//     systemImpledescriptionThree,
//     systemImpledescriptionFour,
//     systemImpledescriptionFive,
//     conclusion,
//     \`references\`,
//     acknowledment,
//     titleimg,
//     compimg,
//     sysAImg,
//     sysSetupImg1,
//     sysSetupImg2,
//     sysSetupImg3,
//     impImg,
//     impImg2,
//     impImg3,
//     impImg4
//   )
//   VALUES (?, ?)`;
//         console.log("req.body", req.body)
//         const values = [
//             req.body.title,
//             req.body.content,
//             req.body.desc,
//             req.body.date,
//             req.body.cat,
//             req.body.objectives,
//             req.body.architecturedesc,
//             req.body.component,
//             req.body.systemSetup,
//             req.body.systemSetupdescription,
//             req.body.systemSecondSetupdescription,
//             req.body.systemSetupThreedescription,
//             req.body.systemImpledescription,
//             req.body.systemImpledescriptionTwo,
//             req.body.systemImpledescriptionThree,
//             req.body.systemImpledescriptionFour,
//             req.body.systemImpledescriptionFive,
//             req.body.conclusion,
//             req.body.references,
//             req.body.acknowledment,
//             exactImageNames.titleimg?.[0] ?? null,
//             exactImageNames.compimg?.[0] ?? null,
//             exactImageNames.sysAImg?.[0] ?? null,
//             exactImageNames.sysSetupImg1?.[0] ?? null,
//             exactImageNames.sysSetupImg2?.[0] ?? null,
//             exactImageNames.sysSetupImg3?.[0] ?? null,
//             exactImageNames.impImg?.[0] ?? null,
//             exactImageNames.impImg2?.[0] ?? null,
//             exactImageNames.impImg3?.[0] ?? null,
//             exactImageNames.impImg4?.[0] ?? null
//         ];
//         console.log("values check", values)
//         await executeQuery(sqlInsert, values); // Execute the SQL query
//         return res.json("Post has been created");
//     } catch (err) {
//         console.error("Error adding post:", err);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// }


export const addPost = async (req, res) => {
    try {
        console.log("extractImageNamescccccccccc")
        // // Function to extract image names from an array of file paths
        // const extractImageNames = (filePaths) => {
        //     return filePaths.map(filePath => {
        //         const parts = filePath.split('/');
        //         return parts[parts.length - 1];
        //     });
        // };

        // // req.body.img.filenames contains all the file path arrays
        // const imgFilenames = req.body.img.filenames;

        // // Extracting image names for each array
        // const exactImageNames = {};
        // for (const key in imgFilenames) {
        //     if (imgFilenames.hasOwnProperty(key)) {
        //         const filePathArray = imgFilenames[key];
        //         exactImageNames[key] = extractImageNames(filePathArray);
        //     }
        // }
        // console.log("Exact image names:", exactImageNames);
        // console.log("exactImageNames!!", exactImageNames.titleimg)
        // console.log("db res", res)
        
        const sqlInsert = `
  INSERT INTO blogs (
    title,
    content,
    category,
    coverImage
  ) 
  VALUES (?, ?, ?, ?)`;
        console.log("req.body", req.body)
        const values = [
            req.body.title,
            req.body.content,
            req.body.category,
            req.body.coverImage

        ];
        console.log("values check", values)
        await executeQuery(sqlInsert, values); // Execute the SQL query
        return res.json("Post has been created");
    } catch (err) {
        console.error("Error adding post:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deletePost = (req, res) => {
    res.json("from controller")
}
export const updatePost = (req, res) => {
    res.json("from controller")
}