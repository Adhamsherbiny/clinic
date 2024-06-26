"use client"
import Link from "next/link";
import Footers from "./footer";
import Header from "./header";
import "./homepage.css"
export default function Home() {
  return (
   <main className="homepage">
    <Header/>
    <div className="half-page halfpage-logo">
    </div>
    <div className="half-page">

      <form className="log" method="post">
        <div className="log-d">
          <label htmlFor="user">Username</label>
          <input type="text" id="user" required />
        </div>
        <div className="log-d">
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" required />
        </div>
        <div className="control">
          <input type="submit" className="log-inp" value="Login" />
        </div>
      </form>
      <p className="register-text">Do not have Account <Link className="register-link" href="/singup">Register</Link></p>
      <p className="slogan">Trust us, for better health care</p>
    </div>
    <Footers/>
   </main>
  );
}
