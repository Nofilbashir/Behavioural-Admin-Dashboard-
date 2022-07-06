import React from 'react'
import './FeaturedInfo.css'
import {ArrowDropDown, ArrowDropUp} from '@mui/icons-material';

const FeaturedInfo = ({RevenueData, SalesData, CostData}) => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featureTitle">{RevenueData.title}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{RevenueData.money}</span>
                    <span className="featuredMoneyRate">{RevenueData.rate}<ArrowDropUp className='featureIcon'/></span>
                </div>
                <span className="featureSub">Compared to last month</span>

        </div>

        <div className="featuredItem">
            <span className="featureTitle">{SalesData.title}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{SalesData.money}</span>
                    <span className="featuredMoneyRate">{SalesData.rate}<ArrowDropUp className='featureIcon'/></span>
                </div>
                <span className="featureSub">Compared to last month</span>

        </div>

        <div className="featuredItem">
            <span className="featureTitle">{CostData.title}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{CostData.money}</span>
                    <span className="featuredMoneyRate">{CostData.rate}<ArrowDropDown className='featureIcon negative'/></span>
                </div>
                <span className="featureSub negative">Compared to last month</span>

        </div>
    </div>
  )
}

export default FeaturedInfo