"use client"
import Image from 'next/image';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 95, fill: '#C3EBFA' },
  { name: 'Group B', value: 8, fill: '#FAE27C' },
];


const Performance = (

) => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Performance</h1>
            <Image src="/moreDark.png" alt="" width={16} height={16} />
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
            <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
            />
        </PieChart>
        </ResponsiveContainer>
        <div className="absolute"></div>

    </div>
  );
}


export default Performance