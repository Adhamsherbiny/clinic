"use client"
import { useState } from "react";
import Header from "../header";
import "./singup.css";
import axios from "axios";
export default function Singup() {
  const [name , setName] = useState<any>([])
  const [userName , setUserName] = useState<any>([])
  const [password , setPassword] = useState<any>([])
  const [age , setAge] = useState<any>([])
  const [adress , setAdress] = useState<any>([])
  const [phone , setPhone] = useState<any>([])
  function Register(e: { preventDefault: () => void; }){
    e.preventDefault()
    axios.post("http://localhost:5000/user/createuser" , {name , userName , password , age , adress , phone})
    .then(response=>{
      console.log(response.data.msg)
    })
    .catch(err=>console.log(err))
    }
  return (
    <div className="singup-page">
      <Header/>
      <form onSubmit={Register} className="sing-form" method="post" autoComplete="off">
      <p className="head-text">Register</p>
        <div className="form-d">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="form-d">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required onChange={(e)=>{setUserName(e.target.value)}} />
        </div>
        <div className="form-d">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <div className="form-d">
          <label htmlFor="age">Age</label>
          <input type="text" id="age" required onChange={(e)=>{setAge(e.target.value)}} />
        </div>
        <div className="form-d">
          <label htmlFor="adress">Adress</label>
          <input type="text" id="adress" onChange={(e)=>{setAdress(e.target.value)}} />
        </div>
        <div className="form-d">
          <label htmlFor="mobile">Phone</label>
          <input type="text" id="mobile" required onChange={(e)=>{setPhone(e.target.value)}} />
        </div>
        <input className="sing-btn" type="submit" value="Register" />
      </form>
    </div>
  );
}
