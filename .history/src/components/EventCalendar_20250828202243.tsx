"use client"
import Calendar from 'react-calendar';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
     const [value, onChange] = useState<Value>(new Date());
  return (
    <div className=''>EventCalendar</div>
  )
}

export default EventCalendar