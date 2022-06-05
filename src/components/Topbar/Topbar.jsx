import React from 'react'
import {NotificationsNone, Settings, Language} from '@mui/icons-material';
import './Topbar.css'
const Topbar = () => {
  return (
<div className="topbar">
    <div className="topbarWrapper">
        <div className="topbarLeft">
            <span className='logo'>
                Impact Dashboard
            </span>
        </div>
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