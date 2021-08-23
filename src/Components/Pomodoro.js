import React,{useState,useEffect} from 'react'

function Pomodoro() {
     const [minutes,setMinutes] = useState(25);
     const [seconds,setSeconds] = useState(10);
     const [message,setMessage] = useState(false);

     const displayedMinutes = minutes < 10 ? `0${minutes}` : minutes;
     const displayedSeconds = seconds < 10 ? `0${seconds}` : seconds;
     useEffect(() => {
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

          },1000)
     }, [seconds])

     return (
          <div className="Pomo-timer">
               {message ? <h2>Break Time! New Session Starts in : </h2> : <h2>Keep Working. You got this!</h2>}
               <div className="clock">
                    {displayedMinutes}:{displayedSeconds}
               </div>
          </div>
     )
}

export default Pomodoro
