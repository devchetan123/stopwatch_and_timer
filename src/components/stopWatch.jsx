import React, { useEffect, useState } from 'react'
import Styles from "./timer.module.css"

function StopWatch() {

    const [sec, setsec] = useState(0)
    const [min, setMin] = useState("")
    const [hr, setHr] = useState("")
    const [startStop, setStartStop] = useState(false)
    const [ider,setIder] = useState()

    useEffect(() => {

        if(sec/60 === 1){
            setsec(0)
            setMin(+min + 1)
        }
        if(min/60 === 1){
            setMin(0)
            setHr(+hr + 1)
        }

    },[sec,min,hr])

    const start = () => {
        if(!ider){
            const id = setInterval(() => {
                setsec(function (prev){
                   return prev + 1
                })
            },1000)
            setIder(id)
        }
        return () => {}
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
        setStartStop(false)
    }


  return (
    <div className={Styles.stopWDiv}>
        <div className={Styles.stopWatchScreen}>
            {hr > 0 && <><h1>{hr} </h1> <p>h</p></>}
            {min > 0 && <><h1>{min} </h1> <p>m</p></>}
           <h1>{sec}</h1> <p>s</p>
        </div>
        {/* <button onClick={start}>Start</button> */}
        <button className={Styles.StartStopWatchBtn} onClick={() => {
             startStop === false ? start() : stop() ;
             setStartStop(!startStop)
        }}>{startStop === false ? "START" : "STOP"}</button>
        <button className={Styles.stopResetBtn} onClick={reset}>RESET</button>

    </div>
  )
}

export default StopWatch