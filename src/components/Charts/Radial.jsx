import React, { PureComponent } from 'react';
import './Radial.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';


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
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={this.props.data}>
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
