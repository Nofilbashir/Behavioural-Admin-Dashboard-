import React from 'react'
import './FeaturedInfo.css'
import {ArrowDropDown, ArrowDropUp} from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featureTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 3,455</span>
                    <span className="featuredMoneyRate">+11.4 <ArrowDropUp className='featureIcon'/></span>
                </div>
                <span className="featureSub">Compared to last month</span>

        </div>

        <div className="featuredItem">
            <span className="featureTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 9,415</span>
                    <span className="featuredMoneyRate">+4.4 <ArrowDropUp className='featureIcon'/></span>
                </div>
                <span className="featureSub">Compared to last month</span>

        </div>

        <div className="featuredItem">
            <span className="featureTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 1,415</span>
                    <span className="featuredMoneyRate">-2.4<ArrowDropDown className='featureIcon negative'/></span>
                </div>
                <span className="featureSub negative">Compared to last month</span>

        </div>
    </div>
  )
}

export default FeaturedInfo