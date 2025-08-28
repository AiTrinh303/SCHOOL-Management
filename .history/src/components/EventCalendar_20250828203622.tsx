"use client"
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
        <div className="flex flex-col gap-4">
            
        </div>
    </div>
  )
}

export default EventCalendar