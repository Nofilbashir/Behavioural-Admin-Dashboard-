import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {BookingHoursData} from '../../Data'

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

  render() {
    return (
        <div className='chart'>
            <span className='composed_Title'>Booking Hours Analysis</span>

      <ResponsiveContainer width="100%" aspect={2/1}>
          
        <BarChart width={150} height={40} data={BookingHoursData} >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip/>
          <Legend />
          <Bar dataKey="Hours" fill="#8884d8" radius={[30, 30, 0, 0]}/>
        </BarChart>
        
      </ResponsiveContainer>
      </div>
    );
  }
}
