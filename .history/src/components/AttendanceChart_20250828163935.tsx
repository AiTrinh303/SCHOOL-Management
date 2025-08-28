"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 4000,
    absent: 2400,
  },
  {
    name: 'Tue',
    present: 3000,
    absent: 1398,
  },
  {
    name: 'Wed',
    present: 2000,
    absent: 9800,
  },
  {
    name: 'Thurs',
    present: 2780,
    absent: 3908,
  },
  {
    name: 'Fri',
    present: 1890,
    absent: 4800,
  }
];

const AttendanceChart = () => {
  return (
    <div className=''>AttendanceChart</div>
  )
}

export default AttendanceChart