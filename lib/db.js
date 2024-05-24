// // db.js
// import { Client } from "pg";

// const db = new Client({
//   user: process.env.POSTGRES_USER,
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DATABASE,
//   password: process.env.POSTGRES_PASSWORD,
//   ssl: {
//     rejectUnauthorized: false, // Not recommended for production, but can be used in development if your database doesn't support SSL
//   },
// });

// // Connect to the database
// db.connect()
//   .then(() => console.log("Connected to PostgreSQL database"))
//   .catch((err) => console.error("Error connecting to PostgreSQL database:", err));

// export default async function executeQuery({ query, values }) {
//   try {
//     const results = await db.query(query, values);
//     return results.rows;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw error;
//   }
// }
