"use client"
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

//TEMPORARY EVENTS
const events = [
    {
        id: 1,
        title: "Math Exam",
        time: "12:00 PM - 2:00 PM",
        description: "Final math exam for grade 10.",
    },
    {
        id: 2,
        title: "Science Fair",
        time: "10:00 AM - 4:00 PM",
        description: "Annual science fair showcasing student projects.",
    },
    {
        id: 3,
        title: "Parent-Teacher Meeting",
        time: "3:00 PM - 5:00 PM",
        description: "Discuss student progress with teachers.",
    }
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
            <h1 className='text-xl font-semibold my-4'>Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-4">
            {events.map((event) => (
                <div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-jojoSky">
                   <div className="flex items-center justify-between">
                        <h1 className="font-semibold">{event.title}</h1>
                        <span className="text-sm text-gray-600">{event.time}</span>
                   </div>
                        <p className="text-sm">{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalendar