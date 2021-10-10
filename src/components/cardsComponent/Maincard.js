import '../../App.css'
import Centercard from './Centercard'
import React from 'react'
import eth from '../../images/eth.png';
import btc from '../../images/btc.png'
import ltc from '../../images/ltc.png'

const Maincard = () => {
    return (
        <div className='mainCard'>
        < Centercard cryptoAsset="Bitcoin" cryptoAssetValue ="0.566699 BTC" cryptoAssetValueUSD ="11,032.24 USD " alt="BTC" imgSrc = {btc}/>
        < Centercard cryptoAsset = "Litecoin" bg = "#ffc0f4" cryptoAssetValue ="120.564 LTC" cryptoAssetValueUSD="37747.78 USD" alt="LTC" imgSrc ={ltc}/>
        < Centercard cryptoAsset = "Ethereum" bg = "#86dceb" cryptoAssetValue ="10.612 ETH" cryptoAssetValueUSD ="1242.31 USD" alt = "ETH" imgSrc = {eth}/>
        </div>
    )
}

export default Maincard
