import React from 'react'
import './Style.css';

export default function TimerUi({showInput, dateInput}) {
  return (
    <div className='page-container'>
        <div className='page-wrapper'>
          {/* <img src="./img/countd.jpg" alt="" /> */}
        <input type={"date"} onChange={showInput} value={dateInput} />
        <ul>
            <li>
              <p>00</p>
              <p>days</p>
            </li>
            <li>
              <p>00</p>
              <p>Hrs</p>
            </li>
            <li>
            <p>00</p>
              <p>Mins</p>
            </li>
            <li>
               <p>00</p>
              <p>Secs</p>
            </li>
        </ul>
       
        </div>
    </div>
  )
}
