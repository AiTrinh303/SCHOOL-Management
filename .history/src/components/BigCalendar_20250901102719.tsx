"use client"
import React, { useState } from 'react'
import { Calendar, momentLocalizer, Views } from '@types/react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { View } from 'react-calendar/src/shared/types.js'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  return (
    <div className=''>
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work-week","day"]}
            view={view}
            onView={setView}
            style={{ height: 500 }}
        />
    </div>
  )
}

export default BigCalendar