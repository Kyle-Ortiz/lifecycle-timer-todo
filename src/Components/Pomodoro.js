import React,{useState,useEffect} from 'react'

function Pomodoro() {
     const [minutes,setMinutes] = useState(25);
     const [seconds,setSeconds] = useState(0);
     const [message,setMessage] = useState(false);
     const [timerState, setTimerState] = useState(false);

     const displayedMinutes = minutes < 10 ? `0${minutes}` : minutes;
     const displayedSeconds = seconds < 10 ? `0${seconds}` : seconds;
     
     function timerStartHandler() {
          setTimerState(!timerState);
     }
     
     useEffect(() => {
          if (timerState === true) {
          let interval = setInterval(()=> {
               clearInterval(interval);

               if(seconds === 0 && minutes !== 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
               } else if (seconds === 0 && minutes === 0) {
                    const newTimerMinutes = message ? 24 : 4;
                    const newTimerSeconds = 59

                    setMinutes(newTimerMinutes);
                    setSeconds(newTimerSeconds);
                    setMessage(!message);
               } else {
                    setSeconds(seconds - 1 )
               }

          },1000)}
     }, [seconds,timerState])
     
     return (
          <div className="timer-card">
               <div className="Pomo-timer">
                    {message ? <h2 id="timer-message">Break Time! New Session Starts in : </h2> : <h2 id="timer-message">Keep Working. You got this!</h2>}
                    <div className="clock">
                    {displayedMinutes}:{displayedSeconds}
                    </div>
                    <button className="timer-button" onClick={timerStartHandler}> {timerState ? "Stop timer" : "Start timer"}</button>
               </div>
          </div>
     )
}

export default Pomodoro
