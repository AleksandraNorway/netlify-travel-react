import React from "react"
import logo from '../src/Fill-213.png';
export default function Navbar() {
    return (
        <nav>
           <img src={logo} className="nav--logo" alt="" />
            <p className="nav-name">my travel journal.</p>
            
        </nav>
    )
}