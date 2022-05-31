import React from 'react'
import './User.css'
import {CalendarToday, LocationSearching, Mail, PermIdentity, PhoneIphone, Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { UserRows } from '../../Data';



const User = () => {


  var url=window.location.href
  var id = url.substring(url.lastIndexOf('/') + 1);
  id = Number(id)
  const item=UserRows.find((item)=>{
    return item.id === id
  })
  console.log(item)
  return (
    <div className='User'>
      <div className="UserTitleContainer">
        <span className='UserTitle'>Edit User</span>
        <Link to='/newUser'>
        <button className="UserAddButton">Create</button>
        {console.log(item)}
        </Link>
      </div>
      <div className="UserContainer">
        <div className="UserShow">
          <div className="UserShowTop">
              <img className='UserShowImg' src="https://www.whatsappimages.in/wp-content/uploads/2020/05/Stylish-Boys-Whatsapp-DP-10-1024x950.jpg" alt="" />
              <div className='UserShowTopTitle'>
                <span className='UserShowUserName'>{item.UserName}</span>
                <span className='UserShowUserTitle'>MERN stack Developer</span>
              </div>
          </div>
          <div className="UserShowBotton">
            <span className="UserShowTitle">Account Details</span>
            <div className="UserShowInfoContainer">
            <PermIdentity className='UserShowIcon'/>
            <span className='USerShowInfoTitle'>waqar89</span>
            </div>
            <div className="UserShowInfoContainer">
            <CalendarToday className='UserShowIcon'/>
            <span className='USerShowInfoTitle'>5 June 1995</span>
            </div>
            <span className="UserShowTitle">Contact Details</span>

            <div className="UserShowInfoContainer">
            <Mail className='UserShowIcon'/>
            <span className='USerShowInfoTitle'>+92 300 1234567</span>
            </div>
            <div className="UserShowInfoContainer">
            <PhoneIphone className='UserShowIcon'/>
            <span className='USerShowInfoTitle'>waqar@email.com</span>
            </div>
            <div className="UserShowInfoContainer">
            <LocationSearching className='UserShowIcon'/>
            <span className='USerShowInfoTitle'>Islamabad | Pakistan</span>
            </div>
          </div>

        </div>
        <div className="UserUpdate">
          <span className='UserUpdateTitle'>Edit</span>
          <form action="" className="UserUpdateForm">
            <div className="UserUpdateLeft">

              <div className="UserUpdateItem">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='waqar99' className='UserUpdateInput'/>
              </div>
              <div className="UserUpdateItem">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='Waqar Afzal' className='UserUpdateInput'/>
              </div>
              <div className="UserUpdateItem">
                <label htmlFor="">Email</label>
                <input type="text" placeholder='waqar@email.com' className='UserUpdateInput'/>
              </div>
              <div className="UserUpdateItem">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='+92 300 1234567' className='UserUpdateInput'/>
              </div>
              <div className="UserUpdateItem">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Islamabad | Pakistan' className='UserUpdateInput'/>
              </div>

            </div>
            <div className="UserUpdateRight">
              <div className="UseerUpdateUpload">
                <img className='UserUpdateImg' src="https://www.whatsappimages.in/wp-content/uploads/2020/05/Stylish-Boys-Whatsapp-DP-10-1024x950.jpg" alt="" />
                <label htmlFor="file"><Publish className='UploadIcon'/></label>
                <input type="file"  id='file' style={{display:"none"}}/>
              </div>
              <button className="UserUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User