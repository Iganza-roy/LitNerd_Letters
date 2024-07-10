// This file establishes a connection with the database using MySQL.

import mysql from "mysql";
import dotenv from "dotenv"; // for loading env variables

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
