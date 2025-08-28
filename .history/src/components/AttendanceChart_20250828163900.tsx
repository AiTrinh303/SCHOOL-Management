"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    present: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    present: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thurs',
    present: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    present: 1890,
    pv: 4800,
    amt: 2181,
  }
];

const AttendanceChart = () => {
  return (
    <div className=''>AttendanceChart</div>
  )
}

export default AttendanceChart