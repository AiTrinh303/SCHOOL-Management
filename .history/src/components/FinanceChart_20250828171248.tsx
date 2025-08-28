"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,    
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,    
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300,
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