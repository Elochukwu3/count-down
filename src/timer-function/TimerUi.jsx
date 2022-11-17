import React from 'react'
import './Style.css';

export default function TimerUi({dateVal, dateChange, hour, min, sec, day}) {

  return (
    <div className='page-container'>
        <div className='page-wrapper'>
         
        <input type={"date"} onChange={dateChange} value={dateVal} />
        <ul>
            <li>
              <p>{day}</p>
              <p>days</p>
            </li>
            <li>
              <p>{hour}</p>
              <p>Hrs</p>
            </li>
            <li>
            <p>{min}</p>
              <p>Mins</p>
            </li>
            <li>
               <p>{sec}</p>
              <p>Secs</p>
            </li>
        </ul>
       
        </div>
    </div>
  )
}
