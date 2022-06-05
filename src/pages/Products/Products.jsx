import React from 'react'
import './Products.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { ProductRows } from '../../Data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Products = () => {
  const [data, setData] = useState(ProductRows)

  const handleDelete=(id)=>{
    setData(data.filter((item)=> item.id !==id))
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'product', headerName: 'product', width: 300 , renderCell:(params)=>{
      return(
          <div className='ProductListproduct'>
              <img src={params.row.img} alt="" />
              {params.row.name}
          </div>
      )
  }},  
  { field: 'Package', headerName: 'Package', width: 200 },
  { field: 'status', headerName: 'Status', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 100,
  },
  {
      field:'Action' , headerName: 'Action', with:150 , renderCell:(params)=>{
          return(
            <>
            <Link to={'/product/'+ params.row.id}>
            <button className="ProductListEdit">Edit</button>
            </Link>
            <DeleteOutline className='ProductListDelete' onClick={()=>handleDelete(params.row.id)}/>
            </>
          )
      }
  }
];



  return (
    <div className='productList'>
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

export default Products