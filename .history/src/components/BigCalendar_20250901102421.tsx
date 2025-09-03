"use client"
import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [view, setView] = useState(Viewa);
  return (
    <div className=''>
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            // views={["work-week","day"]}  
            // view="work-week"
            style={{ height: 500 }}
        />
    </div>
  )
}

export default BigCalendar