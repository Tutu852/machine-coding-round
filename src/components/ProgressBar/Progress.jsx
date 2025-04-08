import "./progress.css"
import MainPrograssBar from "./components/MainPrograssBar"
import { useEffect, useState } from "react"

const Progress = () => {
    const [value,setValue] = useState(0);
    const [success,setSuccess] = useState(false);
    useEffect(()=>{
        //this will run after function
        //because it is a async it runs last after completing everthing
        setInterval(()=>{
            setValue((val)=>val +1);
        },100);
    },[]);
  return (
    <div className="app">
        <span>Progress Bar</span>
        <MainPrograssBar value={value}
        //after complete the 100% it will run
        onComplete={()=>{setSuccess(true)}}
        />
        <span>{success ?"Complete" : "loading..."}</span>
    </div>
  )
}

export default Progress

//ARIA: progressbar role
//Accessibility i need to study
