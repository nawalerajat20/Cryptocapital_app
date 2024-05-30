import React from 'react'
import CryptoPrediction from './CryptoPrediction';
import './Card.css'

function Card({ data }) {
    return (
        <div className='card'>
            {data && data.map(crypto => (
                <div className='card-body'>
                    <img src={crypto.icon} alt="" srcset="" />
                    <h2>{crypto.name}</h2>
                    <h2>{crypto.symbol}</h2>
                    <a href={<CryptoPrediction name = {crypto.symbol}/>}>View</a>
                </div>
            ))}
        </div>
    )
}

export default Card