import React, { PureComponent } from 'react';
import './Composed.css'
import {BookingData} from '../../Data'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';



export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

  render() {
    return (
        <div className='composed'>
            <span className='composed_Title'>Booking Trend Analysis</span>
      <ResponsiveContainer width="100%" aspect={2/1} >
        <ComposedChart
          width={500}
          height={400}
          data={BookingData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Trend" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="BookingHours" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Bookings" stroke="#ff7300" />
          <Scatter dataKey="Average" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
