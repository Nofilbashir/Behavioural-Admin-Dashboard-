import React from 'react'
import './Sidebar.css';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import {LineStyle, Analytics, TrendingUp, AccountCircle, Category, Assessment, Email, Feedback, Chat, WorkOutline, Report} from '@mui/icons-material';

const Sidebar = () => {

    var url=window.location.href
    var url_route = url.substring(url.lastIndexOf('/')+1);
    const [selected, setSelected] = useState(url_route)
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();


    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
          setActiveMenu(false);
        }
      };


  return (
    <>
  
    {activeMenu && (
        <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <div className="topbarLeft">
            <span className='logo'>
                Impact Dashboard
            </span>
            <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="cancel-btn btn"
              >
                <MdOutlineClose />
              </button>
        </div>
                <div className="sidebarTitle">Dashboard</div>
                <ul className="sidebarlist">
                    <Link to='/' className='Link'> 
                    <li onClick={()=>setSelected('')} className={selected===''? 'active listitem': 'listitem' }>
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    </Link>
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
                    <Link to='/user'  className='Link'>
                    <li  onClick={()=>setSelected('user')} className={selected==='user'? 'active listitem': 'listitem' }>
                        <AccountCircle className='sidebarIcon'/>
                        Users
                    </li>
                    </Link>
                    <Link to='/products'  className='Link'>
                    <li onClick={()=>setSelected('products')} className={selected==='products'? 'active listitem': 'listitem' }>
                        <Category className='sidebarIcon'/>
                        Products
                    </li>
                    </Link>
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
</>

  )
}

export default Sidebar