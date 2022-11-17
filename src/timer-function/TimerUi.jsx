import React from 'react'
import './Style.css';

export default function TimerUi({showInput, dateInput}) {
  return (
    <div className='page-container'>
        <div className='page-wrapper'>
          <img src="./img/countd.jpg" alt="" />
        <input type={"date"} onChange={showInput} value={dateInput} />
        <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
        </ul>
       
        </div>
    </div>
  )
}
