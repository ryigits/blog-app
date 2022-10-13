import mysql from "mysql";

export const db  = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Yigit79*",
  database:"blog"
})