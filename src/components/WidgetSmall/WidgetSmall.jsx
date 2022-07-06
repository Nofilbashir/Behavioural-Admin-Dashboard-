import React from 'react'
import './WidgetSmall.css'
// import {Visibility} from '@mui/icons-material';
import {SmallWidgetData} from '../../Data'

const WidgetSmall = () => {
  return (
    <div className='WidgetSmall'>
        <span className="WidgetSamllTitle">New Members Joined</span>
        <ul className="WidgetSmallList">
        {SmallWidgetData.map((user)=>{
            return(
                <li className="SmallItem">
                <img src={user.img} alt="" className="widgetSmallItemImg" />
                <div className="WidgetSmallUser">
                    <span className="WidgetSmalluserName">{user.name}</span>
                    <span className="WidgetSmalluserTitle">{user.title}</span>
                </div>
                {/* <button className="WidgetSmallButton">
                    <Visibility className='WidgetsmallVisibilityIcon'/>
                    Display
                </button> */}
            </li>

            )
        })}
        </ul>
    </div>
  )
}

export default WidgetSmall