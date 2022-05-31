import React from 'react'
import './Sidebar.css'
import {LineStyle, Analytics, TrendingUp, AccountCircle, Category, Assessment, Email, Feedback, Chat, WorkOutline, Report} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <div className="sidebarTitle">Dashboard</div>
                <ul className="sidebarlist">
                    <li className="listitem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="listitem">
                        <Analytics className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="listitem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
                
            </div>


            <div className="sidebarMenu">
                <div className="sidebarTitle">Quick Menu</div>
                <ul className="sidebarlist">
                    <li className="listitem">
                        <AccountCircle className='sidebarIcon'/>
                        Users
                    </li>
                    <li className="listitem">
                        <Category className='sidebarIcon'/>
                        Products
                    </li>
                    <li className="listitem">
                        <TrendingUp className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="listitem">
                        <Assessment className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <div className="sidebarTitle">Notification</div>
                <ul className="sidebarlist">
                    <li className="listitem">
                        <Email className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="listitem">
                        <Feedback className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="listitem">
                        <Chat className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <div className="sidebarTitle">Staff</div>
                <ul className="sidebarlist">
                    <li className="listitem">
                        <WorkOutline className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="listitem">
                        <Analytics className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="listitem">
                        <Report className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>



        </div>
    </div>
  )
}

export default Sidebar