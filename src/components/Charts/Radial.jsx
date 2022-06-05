import React, { PureComponent } from 'react';
import './Radial.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'Monday',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: 'Tuesday',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: 'Wednesday',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: 'Thursday',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: 'Friday',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: 'Saturday',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'Sunday',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

  render() {
    return (
        <div className='chart'>
        <span className='ChartsTitle'>Peak Days</span>

      <ResponsiveContainer width="100%" aspect={2/1}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            // label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Tooltip/>
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
    );

  }
}
