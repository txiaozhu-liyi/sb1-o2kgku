import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { time: '0:00', value: 75 },
  { time: '1:00', value: 95 },
  { time: '2:00', value: 98 },
  { time: '3:00', value: 97 },
  { time: '4:00', value: 85 },
  { time: '5:00', value: 55 },
  { time: '6:00', value: 60 },
  { time: '7:00', value: 65 },
  { time: '8:00', value: 63 },
  { time: '9:00', value: 70 },
  { time: '10:00', value: 95 },
  { time: '11:00', value: 85 },
  { time: '12:00', value: 75 },
];

const LineChart = () => {
  return (
    <RechartsLineChart
      width={1000}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
    </RechartsLineChart>
  );
};

export default LineChart;