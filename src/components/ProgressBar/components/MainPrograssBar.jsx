import { useEffect, useState } from "react"


const MainPrograssBar = ({  value=0,onComplete =() =>{} }) => {
    const [precent,setPercent] = useState(value);
    //this is help for not go beyond 100 or less than 0
    useEffect(()=>{
        //it bescically comapre min and max value
        setPercent(Math.min(100,Math.max(value,0)));
        if(value >= 100){
            onComplete();
        }
    },[value]);
  return (
    <div className="progress">
        {/* toFixed will remove the decimal number after original number 23.5 it will say 23  */}
        <span
        style={{color:precent > 49 ? "white" :"black"}}
        >{precent.toFixed()}%</span>
        <div 
        // style={{width:`${precent}%`}} 
        style={{transform:`scaleX(${precent/100})`,
    transformOrigin:"left"}}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={precent.toFixed()}
        />
    </div>
  )
}

export default MainPrograssBar