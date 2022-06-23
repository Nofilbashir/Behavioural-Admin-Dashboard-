import React, { useState ,useEffect} from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import {NotificationsNone, Settings, Language} from '@mui/icons-material';
import { AiOutlineMenu } from 'react-icons/ai';
import './Topbar.css'
const Topbar = () => {
    const {activeMenu,setActiveMenu,screenSize, setScreenSize}= useStateContext();
   


    useEffect(() => {

        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    useEffect(() => {
        if (screenSize <= 900) {
          setActiveMenu(false);
        } else {
          setActiveMenu(true);
        }
      }, [screenSize]);


    const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
<div className="topbar">
    <div className="topbarWrapper">
    <button onClick={handleActiveMenu} className="btn"><AiOutlineMenu /></button>
        <div className="topbarRight">
            <div className="topbarIconscontainer">
            <NotificationsNone/>
            <span className="topIconBag">0</span>
            </div>
            <div className="topbarIconscontainer">
            <Settings/>
            </div>
            <div className="topbarIconscontainer">
            <Language/>
            </div>
            <div className="topAvatar">
                <img src="https://nofil.netlify.app/static/media/about_me.926fc905ea4ddc0739cc.jpg" alt="" />
            </div>
           
        </div>

    </div>
</div>
    )
}

export default Topbar

