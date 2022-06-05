import React from 'react'
import './Linechart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Linechart = ({data, title, grid, dataKey1, dataKey2, ratio} ) => {
  return (
    <div className='chart'>
        <span className='ChartsTitle'>{title}</span>
        <ResponsiveContainer width="100%" aspect={ratio}>
            <LineChart data={data}>
            <XAxis dataKey="name" stroke='#5550bd'/>
           <YAxis stroke='#5550bd'/>
          <Tooltip />
          <Legend />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5,5"/>}
          <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>


    </div>
  )
}

export default Linechart