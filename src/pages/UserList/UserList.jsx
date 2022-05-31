import React from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { UserRows } from '../../Data';
import { Link } from 'react-router-dom';
import { useState } from 'react';




const UserList = () => {
    const [data, setData] = useState(UserRows)

    const deleteUser=(id)=>{
        setData(data.filter((item)=> item.id !==id))
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'User', headerName: 'User', width: 200 , renderCell:(params)=>{
            return(
                <div className='UserListUSer'>
                    <img src={params.row.avatar} alt="" />
                    {params.row.UserName}
                </div>
            )
        }},  
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          type: 'number',
          width: 170,
        },
        {
            field:'Action' , headerName: 'Action', with:150 , renderCell:(params)=>{
                return(
                  <>
                  <Link to={'/user/'+ params.row.id}>
                  <button className="UserListEdit">Edit</button>
                  </Link>
                  <DeleteOutline className='UserListDelete' onClick={()=>deleteUser(params.row.id)}/>
                  </>
                )
            }
        }
      ];
















  return (
    <div className='UserList'>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>

  )
}

export default UserList