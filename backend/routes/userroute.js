import express, { json } from "express"
import cors from "cors"
import Database from "../database/connect.js"
import bcrypt from "bcrypt"
const userRoute = express.Router()
userRoute.use(json())
userRoute.use(cors())
userRoute.use(express.json())
userRoute.post("/createuser" , async (req , res)=>{
    const  hashedPass = await bcrypt.hash(req.body.password ,10)
    const values = [req.body.name , req.body.userName , hashedPass , req.body.age , req.body.adress , req.body.phone];
    Database.query("INSERT INTO users_info (name , username , password , age , adress , phone) VALUES (?)" , [values] , (err , result)=>{
        if (err) throw err
        else{
            res.json({msg: "Added New User"})
        }
    })

})
export {userRoute}