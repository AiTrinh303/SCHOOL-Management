"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    income: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    income: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    income: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    income: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    income: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    income: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    income: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    income: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    income: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    income: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl h-full p-4'>
        <div className='flex justify-between items-center mb-2'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
    </div>
  )
}

export default FinanceChart