import Logo from "../../assets/qr-code.png"
import LogoPurple from "../../assets/qr.png"
import React from 'react'
import "./navbar.css"

export default function Navbar({ type }) {
    return (
        <div className='navbar'>
            <div className='navbarLeft'>
                <img src={type === "single" ? LogoPurple : Logo} alt={"just qr code"} />
                <h1 style={{
                    color: type === "single" && "black"
                }}>COFEESCAN</h1>
            </div>
            <button>Launch App</button>
        </div>
    )
}
