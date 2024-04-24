import mysql from "mysql2/promise";



const createDbPool = async () => {
    try {
        const pool = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "root",
            database: "blog",
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
        return pool;
    } catch (err) {
        console.error("Error creating MySQL connection pool:", err);
        throw err;
    }
};

// Function to execute SQL queries
export const executeQuery = async (sql, params = []) => {
    try {
        console.log("dbbbbb", sql)
        const pool = await createDbPool();
        const [rows, fields] = await pool.execute(sql, params);
        return rows;
    } catch (err) {
        console.error("Error executing SQL query:", err);
        throw err;
    }
};