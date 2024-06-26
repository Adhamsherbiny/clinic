import mysql from "mysql"

const  Database =  mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"clinic"
})

Database.connect((err)=>{
    if(err) throw err
    else{
        console.log("Database is ready to use")
    }
})

export default Database

