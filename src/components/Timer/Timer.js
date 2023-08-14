import React, { useState, useEffect } from 'react';
import './Timer.scss';

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
          const targetDate = new Date("December 31, 2023 23:59:59").getTime();
          const now = new Date().getTime();
          const timeDiff = targetDate - now;
    
          if (timeDiff <= 0) {
            // Countdown completed
            return;
          }
    
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
          setTimeLeft({ days, hours, minutes, seconds });
        };
    
        const timer = setInterval(calculateTimeLeft, 1000);
    
        return () => {
          clearInterval(timer);
        };
    }, []);

  return (
    <section className='sectionTimer'>
      <div className="container">
        <div className="sectionTimer__countdown" id="timerFunc">
            <span id="daysBox" className="days">{timeLeft.days}</span>
            <span className="days">Days</span>
            <span id="hoursBox" className="hours">{timeLeft.hours}</span>
            <span className="hours">Hours</span>
            <span className="and">&amp;</span>
            <span id="minsBox" className="minutes">{timeLeft.minutes}</span>
            <span className="minutes">Minutes</span>
            <span id="secsBox" className="seconds">{timeLeft.seconds}</span>
            <span className="seconds">Seconds</span>
        </div>
        <p className="sectionTimer__left">left till the happy event</p>
      </div>
    </section>
  )
}

export default Timer
