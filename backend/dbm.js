import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#majoriganza5830',
    database: 'litnerd'
});