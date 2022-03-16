import React, { useEffect, useState } from 'react'
import Styles from "./timer.module.css"
import TimerInput from './timerInput'


    
const times = {
    h : "",
    m : "",
    s : ""
}


function Timer() {

    const [sec, setsec] = useState(0)
    const [min, setMin] = useState(0)
    const [hr, setHr] = useState(0)
    const [input, setInput] = useState(times)
    const [ider,setIder] = useState()
    const [visible,setVisible] = useState(false)
    const [startStop, setStartStop] = useState(false)

    useEffect(() => {

            if(sec === 0){
                if(min !== 0){
                    setMin(min - 1)
                    setsec(59)
                }
            }
            if(min === 0){
                if(hr !== 0){
                    setHr(hr - 1)
                    setMin(59)
                }
            }

            // return () => {}
    },[sec,min,hr])

    const start = () => {
        if(!ider){
            const id = setInterval(() => {
                setsec(function (prev){
                    if(prev > 0){
                        return prev - 1
                    }
                    else{
                        setsec(0)
                        clearInterval(id)
                        setIder()
                    }
                })
            },1000)
            setIder(id)
        }
    }

    const stop = () => {
        clearInterval(ider)
        setIder()
    }

    const reset = () => {
        setsec(0);
        setHr(0);
        setMin(0);
        clearInterval(ider)
        setIder()
    }


  return (
     <div className={Styles.timerDiv}>
         {  
            ! visible
            ? <TimerInput input={input} setInput={setInput}/> 
            : <div className={Styles.time}> <h1>{hr}</h1><p>h</p> <h1>{min}</h1><p>m</p> <h1>{sec}</h1> <p>s</p></div>
         }

         <div>
         <button className={Styles.startBtn} onClick={() => {
             start();
             setInput(times);
             setVisible(!visible);
             setsec(+input.s);
             setMin(+input.m);
             setHr(+input.h);
             if(input.s === ""){
                setsec(0)
             }
             if(input.m === ""){
                setMin(0)
             }
             if(input.h === ""){
                setHr(0)
             }
             startStop === true ? setStartStop(!startStop) : setStartStop(startStop);
         }}>{visible ? "CHANGE TIME" : "START"}</button>

         <button className={Styles.stopBtn} onClick={() => {
             !startStop ? stop() : start();
             setStartStop(!startStop);
         }}>{!startStop ? "STOP" : "START"}</button>

         <button className={Styles.resetBtn} onClick={reset}>RESET</button>
         </div>
     </div>
  )
}

export default Timer