import { useImperativeHandle, useRef, useState } from "react"


const FancyInput = ({ref}) => {
  const [inputValue,setInputValue] = useState("");
  const inputRef = useRef(null);
  //we are passing the data parent to child using props.
  //but here if we need pass the data childto parent we use useImperativeHandle
  useImperativeHandle(ref,()=>({
      focus: ()=>{
        inputRef.current.focus();
      },
      clear :()=>{
        inputRef.current.value = "";
      }
    }))

  return (
    <div>
      <input type="text" 
      placeholder="Enter your name"
      value={inputValue}
      onChange ={(e)=>setInputValue(e.target.value)}
      ref={inputRef}
      />

      <p>
        You typed : <strong>{inputValue}</strong>
      </p>
      
    </div>
  )
}

export default FancyInput