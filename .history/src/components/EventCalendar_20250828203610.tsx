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
        <div className="flex">
            <div className="w-full mt-4">
                <h2 className="text-lg font-semibold mb-2">Upcoming Events</h2>
                <ul className="space-y-4 max-h-[400px] overflow-y-auto">
                    {events.map((event) => (
                        <li key={event.id} className="border p-3 rounded-md hover:shadow-md transition-shadow">
                            <h3 className="text-md font-bold">{event.title}</h3>
                            <p className="text-sm text-gray-600">{event.time}</p>
                            <p className="text-sm mt-1">{event.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default EventCalendar