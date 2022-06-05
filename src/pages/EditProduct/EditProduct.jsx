import React from 'react'
import './EditProduct.css'
import { ProductRows } from '../../Data';
import {Link} from 'react-router-dom'
import Linechart from  '../../components/Charts/Linechart'
import {Productdata} from '../../Data'
import { Publish } from '@mui/icons-material';



const EditProduct = () => {

    var url=window.location.href
    var id = url.substring(url.lastIndexOf('/') + 1);
    id = Number(id)
    const item=ProductRows.find((item)=>{
      return item.id === id
    })
  return (
    <div className='EditProduct'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to='/newproduct'>
            <button className="productAddButton">Create</button>
            </Link>
        </div>

        <div className="productTop">
            <div className="productTopLeft">
                <Linechart data={Productdata} dataKey1='Sales' datakey2='Sales' title='Sales Analysis' ratio={1.5/1}/>

            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={item.img} alt="" className='productInfoImg'/>
                    <span className='ProductName'>{item.name}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfokey">id:</span>
                        <span className="productInfoValue">{item.id}</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfokey">Status:</span>
                        <span className="productInfoValue">{item.status}</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfokey">price:</span>
                        <span className="productInfoValue">{item.price}</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfokey">package:</span>
                        <span className="productInfoValue">{item.Package}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className='productForm' action="">
                <div className="ProductLeftForm">
                    <label>Product Name</label>
                    <input type="text" placeholder={item.name}/>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="ProductRightForm">
                    <div className="productUpload">
                        <img src={item.img} alt="" className="productUploadImage" />
                        <label for='file'><Publish/></label>
                        <input type="file" id='file' style={{display:"none"}} />
                    </div>
                    <button type='button' className='ProductButton'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditProduct