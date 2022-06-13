import React from 'react'
import './WidgetLarge.css'

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
       <tr className="WidgetLargetr">
          <td className="WidgetLargetd">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="WidgetLargeTdImg" />
            <span className="WidgetLargeTdName">Ahmed Muaz</span>
          </td>
          <td className="WidgetLargeTdDate">2 June 2021</td>
          <td className="WidgetLargeTdAmount">$ 1,0211</td>
          <td className="WidgetLargeTdStatus"><ButtonWidget type="Approved"/></td>
        </tr>

        <tr className="WidgetLargetr">
          <td className="WidgetLargetd">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="WidgetLargeTdImg" />
            <span className="WidgetLargeTdName">Ahmed Muaz</span>
          </td>
          <td className="WidgetLargeTdDate">2 June 2021</td>
          <td className="WidgetLargeTdAmount">$ 1,0211</td>
          <td className="WidgetLargeTdStatus"><ButtonWidget type="Approved"/></td>
        </tr>

        <tr className="WidgetLargetr">
          <td className="WidgetLargetd">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="WidgetLargeTdImg" />
            <span className="WidgetLargeTdName">Ahmed Muaz</span>
          </td>
          <td className="WidgetLargeTdDate">2 June 2021</td>
          <td className="WidgetLargeTdAmount">$ 1,0211</td>
          <td className="WidgetLargeTdStatus"><ButtonWidget type="Declined"/></td>
        </tr>

        <tr className="WidgetLargetr">
          <td className="WidgetLargetd">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="WidgetLargeTdImg" />
            <span className="WidgetLargeTdName">Ahmed Muaz</span>
          </td>
          <td className="WidgetLargeTdDate">2 June 2021</td>
          <td className="WidgetLargeTdAmount">$ 1,0211</td>
          <td className="WidgetLargeTdStatus"><ButtonWidget type="Pending"/></td>
        </tr>

        <tr className="WidgetLargetr">
          <td className="WidgetLargetd">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="WidgetLargeTdImg" />
            <span className="WidgetLargeTdName">Ahmed Muaz</span>
          </td>
          <td className="WidgetLargeTdDate">2 June 2021</td>
          <td className="WidgetLargeTdAmount">$ 1,0211</td>
          <td className="WidgetLargeTdStatus"><ButtonWidget type="Approved"/></td>
        </tr>
       </tbody>
        

      </table>
    </div>
  )
}

export default WidgetLarge