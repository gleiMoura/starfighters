import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const db = new Pool({
    connectionString: process.env.DATAVBASE_URL
});

export default db;