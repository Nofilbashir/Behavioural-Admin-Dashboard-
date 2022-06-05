import React from 'react'
import './NewUser.css'

const NewUser = () => {
  return (
    <div className='NewUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm' action="">
        <div className="newUSerItem">
          <label>username</label>
          <input type="text" placeholder='Nofil'/>
        </div>

        <div className="newUSerItem">
          <label>Full Name</label>
          <input type="text" placeholder='Nofil Bashir'/>
        </div>

        <div className="newUSerItem">
          <label>Email</label>
          <input type="email" placeholder='abc@email.com'/>
        </div>

        <div className="newUSerItem">
          <label>Password</label>
          <input type="password" placeholder='password'/>
        </div>

        <div className="newUSerItem">
          <label>Phone</label>
          <input type="text" placeholder='+92 300 123 45 67'/>
        </div>
        <div className="newUSerItem">
          <label>Address</label>
          <input type="text" placeholder='E11 | Islamabad'/>
        </div>

        <div className="newUSerItem">
          <label>Gender</label>

          <div className='newUserGender'>
          <input type="radio" name='gender' id='male' value='male'/>
          <label for="male">Male</label>
          <input type="radio" name='gender' id='female' value='female'/>
          <label for="female">Female</label>
          <input type="radio" name='gender' id='other' value='other'/>
          <label for="other">Other</label>
          </div>

        </div>

        <div className="newUSerItem">
          <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
        <button className='newUserButton'>Create</button>

        </div>

      </form>
    </div>
  )
}

export default NewUser