import React, { useState } from 'react'
import StopWatch from './stopWatch'
import Timer from './timer'
import Styles from "./timer.module.css"

function TimerStop() {

    const [watch, setWatch] = useState(false)
 
  return (
    <div>
        <div className={Styles.switch}>
            <button className={watch === false ? Styles.activeTimer : Styles.unactiveTimer} onClick={() => setWatch(false)}>TIMER</button>
            <button className={watch === true ? Styles.activeStopW : Styles.unactiveStopW} onClick={() => setWatch(true)}>STOP WATCH</button>
        </div>
        {!watch ?  <Timer/> :  <StopWatch/>}
    </div>
  )
}

export default TimerStop