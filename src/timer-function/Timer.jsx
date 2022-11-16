import {useState, useEffect} from 'react';
// import {updateTimer} from './UpdateTimer.js';
const initialTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}
export default function Timer() {
    const [time, setTime] = useState(initialTime);

    const countDownDate = new Date("2023-06-19").getTime();
    const todayDate = new Date().getTime()
   const dateInterval = countDownDate - todayDate
  
   useEffect(()=>{
const interval = setInterval(() => {setTime(updateTimer( dateInterval ))}, 100000);
return() => clearInterval(interval)
 }, [ dateInterval ])

  return (
    <div>time</div>
  )
}

function updateTimer(countDown) {
  return{
    seconds: convertSecond(countDown),
    minutes: '00',
    hours: '00',
    days: '00'
  }
}

function convertSecond(countDown) {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
}
function convertMin(countDown) {
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
}
function convertHr(countDown) {
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
}