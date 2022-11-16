import React from 'react'
import '.Style.css';
import {backImg} from '../img/countd.jpeg'
export default function TimerUi({showInput, dateInput}) {
  return (
    <div>
        <input type={"date"} onChange={showInput} value={dateInput} />
        <ul>
            <li></li>
        </ul>
    </div>
  )
}
