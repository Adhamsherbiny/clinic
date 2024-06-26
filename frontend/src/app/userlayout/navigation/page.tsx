"use client"
import Link from "next/link"
import {useRef } from "react"
import "./nav.css"
export default function Navigation() {
  const menu = useRef<any>()
  function toggle(){
    if(menu.current.style.display == "block"){
      menu.current.style.display = "none"
    }else{
      menu.current.style.display = "block"
    }
  }
  return (
    <div className="nav">
        <ul className="nav-menu">
            <li><Link className="nav-taps" href={""}>Booking</Link></li>
            <li><Link className="nav-taps" href={""}>Health Status</Link></li>
            <li><Link className="nav-taps" href={""}>About Us</Link></li>
            <li className="btn-menu" onClick={toggle} >
                Settings
                 <ul className="toggle-menu" ref={menu}>                
                    <li><Link className="toggle-taps" href={""}>Health status</Link></li>
                    <li><Link className="toggle-taps" href={""}>Account Information</Link></li>
                    <li><Link className="toggle-taps" href={""}>Privacy Policy</Link></li>
                    <li><Link className="toggle-taps" href={""}>Logout</Link></li>
                 </ul>
            </li>
        </ul>
    </div>
  )
}
