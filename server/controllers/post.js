import { executeQuery } from "../database/db.js";



// Controller function to get posts
export const getPosts = async (req, res) => {
    try {
        const gpost = "SELECT * FROM posts";
        const posts = await executeQuery(gpost);
        // console.log("datacheck", posts);
        return res.status(200).json(posts);
    } catch (err) {
        console.error("Error fetching posts:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
export const getPost = (req, res) => {
    res.json("from controller")
}
export const addPost = async (req, res) => {
    try {
        // console.log("db res", res)
        const q = "INSERT INTO posts (title, `desc`, img, date, cat, objectives, architecturedesc, component, systemSetup, systemSetupdescription, systemSecondSetupdescription, systemSetupThreedescription, systemImpledescription, systemImpledescriptionTwo, systemImpledescriptionThree, systemImpledescriptionFour, systemImpledescriptionFive, conclusion, `references`, acknowledment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        console.log("req.body!!!!!!!!!", req.body)
        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.date,
            req.body.cat,
            req.body.objectives,
            req.body.architecturedesc,
            req.body.component,
            req.body.systemSetup,
            req.body.systemSetupdescription,
            req.body.systemSecondSetupdescription,
            req.body.systemSetupThreedescription,
            req.body.systemImpledescription,
            req.body.systemImpledescriptionTwo,
            req.body.systemImpledescriptionThree,
            req.body.systemImpledescriptionFour,
            req.body.systemImpledescriptionFive,
            req.body.conclusion,
            req.body.references,
            req.body.acknowledment
        ];
        // console.log("values check", values)
        await executeQuery(q, values); // Execute the SQL query
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