import React from 'react'
import "./single.css"
import firstImage from "../../assets/1.png"
import qrCode from "../../assets/qr.png"
import { Link } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar.jsx"


export default function Single() {
  return (
    <div className='single'>
      <div className="single-container">
        <Navbar type={"single"}/>
        <div className="singleLeftTop">
          <Link to={"/"} className='link'>
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <span>Return to Home</span>
        </div>
        <div className='singleContent'>
          <img src={firstImage} alt="this is first image" className='singleContentImg' />
          <div className="singleRight">
            <div className='singleRightQr'>
              <div className='singleQrTitles'>
                <h3>Frappuccino</h3>
                <p>$ 5.99</p>
              </div>
              <img src={qrCode} alt="" />
            </div>
            <hr />
            <p className='singleDesc'>
              Frappuccino® Roast coffee, milk and ice all come together for a mocha flavor that'll leave you wanting more. To change things up, try it affogato-style with a hot espresso shot poured right over the top.

              370 calories, 51g sugar, 15g fat

              Full nutrition & ingredients list
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
