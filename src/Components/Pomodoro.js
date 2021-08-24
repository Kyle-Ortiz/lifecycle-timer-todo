import React,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom"

function Pomodoro() {
     const [minutes,setMinutes] = useState(25);
     const [seconds,setSeconds] = useState(0);
     const [message,setMessage] = useState(false);
     const [timerState, setTimerState] = useState(false);

     const displayedMinutes = minutes < 10 ? `0${minutes}` : minutes;
     const displayedSeconds = seconds < 10 ? `0${seconds}` : seconds;

     const history = useHistory();

     function dClickHandler(event) {
          event.stopPropagation();
          history.push("/timer");
     }
     
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
          <div className="timer-card" onDoubleClick={(event) => dClickHandler(event)}>
               <div className="Pomo-timer">
                    {message ? <h1 id="timer-message">Break Time! New Session Starts in : </h1> : <h1 id="timer-message">Keep Working. You got this!</h1>}
                    <div className="clock">
                    {displayedMinutes}:{displayedSeconds}
                    </div>
                    <div>
                    <button className="timer-button" onClick={timerStartHandler}> {timerState ? "Stop timer" : "Start timer"}</button>
                    </div>
               </div>
          </div>
     )
}

export default Pomodoro
