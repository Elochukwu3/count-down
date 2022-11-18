import React from "react";
import "./Style.css";

export default function TimerUi({ dateVal, dateChange, hour, min, sec, day }) {
  return (
    <div className="page-container">
      <div>
        <p className="instruction">instruction: <span> (i) select a date to count down to</span></p>
      </div>
      <div className="page-wrapper">
        <input type={"date"} onChange={dateChange} value={dateVal} />
        <ul>
          <li>
            <p className="num">{day}</p>
            <p className="sub">days</p>
          </li>
          <li>
            <p className="num">{hour}</p>
            <p className="sub">Hrs</p>
          </li>
          <li>
            <p className="num">{min}</p>
            <p className="sub"> Mins</p>
          </li>
          <li>
            <p className="num">{sec}</p>
            <p className="sub">Secs</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
