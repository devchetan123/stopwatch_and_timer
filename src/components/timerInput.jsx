import React from 'react'
import Styles from "./timer.module.css"


function TimerInput({input,setInput}) {

    const handleData = (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
    };

  return (
    <>
    <input className={Styles.input} placeholder="00h" type="text" name="h" value={input.h} onChange={handleData}/> 
    <input className={Styles.input} placeholder="00m" type="text"  name="m" value={input.m} onChange={handleData}/> 
    <input className={Styles.input} placeholder="00s" type="text" name="s" value={input.s} onChange={handleData}/> 
    </>
  )
}

export default TimerInput