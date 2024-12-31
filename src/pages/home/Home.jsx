import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"
import Card from '../../components/card/Card'


export default function Home() {
    return (
        <div className='container'>
            <div className='home'>
                <div className='homeContainer'>
                    <Navbar />
                    <div className='header'>
                        <div className='headerTitles'>
                            <div className='headerLine'></div>
                            <h3>SIMPLY CLEVER</h3>
                            <h1>BEST COFFEE</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            <div className='headerLine'></div>
                            <div className='headerBackground'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cardItemsContainer">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
