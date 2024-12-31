import React from 'react'
import firstImage from "../../assets/1.png"
import qrCode from "../../assets/qr.png"
import "./card.css"
import { Link } from 'react-router-dom'

export default function Video() {
  return (
    <div className='card'>
      <Link to={"/single/123"} className='link'>
        <img src={firstImage} alt={firstImage} className='card-img' />
        <div className='card-info'>
          <div className='cardInfo-left'>
            <h3>Frappuccino</h3>
            <p>$ 5.99</p>
          </div>
          <img src={qrCode} alt={qrCode} className='qr-img' />
        </div>
      </Link>
    </div>
  )
}
