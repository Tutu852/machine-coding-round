import { useRef } from "react"
import FancyInput from "./fancy_input";


const AppFancy = () => {
    const fancyInputRef = useRef();
  return (
   <div>
     <FancyInput ref={fancyInputRef}/>

    <button onClick={()=>fancyInputRef.current?.focus()}>Focus</button>
    <button onClick={()=>fancyInputRef.current?.clear()}>Clear</button>
   </div>

  )
}

export default AppFancy