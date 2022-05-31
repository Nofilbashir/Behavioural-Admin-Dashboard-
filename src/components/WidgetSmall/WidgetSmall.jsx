import React from 'react'
import './WidgetSmall.css'
import {Visibility} from '@mui/icons-material';

const WidgetSmall = () => {
  return (
    <div className='WidgetSmall'>
        <span className="WidgetSamllTitle">New Members Joined</span>
        <ul className="WidgetSmallList">
            <li className="SmallItem">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetSmallItemImg" />
                <div className="WidgetSmallUser">
                    <span className="WidgetSmalluserName">Mushtaq Ahmed</span>
                    <span className="WidgetSmalluserTitle">Software Engineer</span>
                </div>
                <button className="WidgetSmallButton">
                    <Visibility className='WidgetsmallVisibilityIcon'/>
                    Display
                </button>
            </li>
            <li className="SmallItem">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetSmallItemImg" />
                <div className="WidgetSmallUser">
                    <span className="WidgetSmalluserName">Saad Ahmed</span>
                    <span className="WidgetSmalluserTitle">AWS Engineer</span>
                </div>
                <button className="WidgetSmallButton">
                    <Visibility className='WidgetsmallVisibilityIcon'/>
                    Display
                </button>
            </li>
            <li className="SmallItem">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetSmallItemImg" />
                <div className="WidgetSmallUser">
                    <span className="WidgetSmalluserName">Shahab Yaseen</span>
                    <span className="WidgetSmalluserTitle">IOS Developer</span>
                </div>
                <button className="WidgetSmallButton">
                    <Visibility className='WidgetsmallVisibilityIcon'/>
                    Display
                </button>
            </li>
            <li className="SmallItem">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetSmallItemImg" />
                <div className="WidgetSmallUser">
                    <span className="WidgetSmalluserName">Waqar Afzal</span>
                    <span className="WidgetSmalluserTitle">MERN Stack Developer</span>
                </div>
                <button className="WidgetSmallButton">
                    <Visibility className='WidgetsmallVisibilityIcon'/>
                    Display
                </button>
            </li>
            <li className="SmallItem">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetSmallItemImg" />
                <div className="WidgetSmallUser">
                    <span className="WidgetSmalluserName">Umair Afzal</span>
                    <span className="WidgetSmalluserTitle">Data Scientist</span>
                </div>
                <button className="WidgetSmallButton">
                    <Visibility className='WidgetsmallVisibilityIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSmall