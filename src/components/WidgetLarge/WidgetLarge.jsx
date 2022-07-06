import React from 'react'
import './WidgetLarge.css'
import {largeWidgetData} from '../../Data'

const WidgetLarge = () => {

  const ButtonWidget =({type})=>{
    return (
      <button className={'WidgetLargeButton '+type}>{type}</button>
      )
  }
  

  return (
    <div className='WidgetLarge'>
      <span className="WidgetLargeTitle">Latest Transactions</span>
      <table className='WidgetLargeTable'>
        <thead>
        <tr className="WidgetLargetr">
          <th className="WidgetLargeTh">Customer</th>
          <th className="WidgetLargeTh">Date</th>
          <th className="WidgetLargeTh">Amount</th>
          <th className="WidgetLargeTh">Status</th>
        </tr>
        </thead>
       <tbody>
        {largeWidgetData.map((user)=>{
          return (
            <tr className="WidgetLargetr">
            <td className="WidgetLargetd">
              <img src={user.img} alt="" className="WidgetLargeTdImg" />
              <span className="WidgetLargeTdName">{user.name}</span>
            </td>
            <td className="WidgetLargeTdDate">{user.date}</td>
            <td className="WidgetLargeTdAmount">{user.amount}</td>
            <td className="WidgetLargeTdStatus"><ButtonWidget type={user.status}/></td>
          </tr>
          )
        })}
       </tbody>
        

      </table>
    </div>
  )
}

export default WidgetLarge