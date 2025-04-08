import { useMemo, useState } from "react"


export const Counter = () => {
    const [count,setCount] = useState(0);
    const [input,setInput] = useState(0);

    function expensiveTask(num){
        console.log("Inside expensive task")
        for(let i=0;i<=1000000000;i++){
            console.log(i);
        }
        return num*2;
    }
    // let doubleValue = expensiveTask(input);

    //to solve this expensive re-render 
    // if the input is same then previous value useMemo store that value to tackel with expensive re-render 
   let doubleValue= useMemo(() => expensiveTask(input) ,[input])
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
        <div>
            Count: {count}
        </div>
        {/* here i am what ever i enter i get double value  */}
        <input type="number"
        placeholder="Enter number"
        value={input}
        onChange={(e) =>setInput(e.target.value)}
        />
        <div>
            Double Value: {doubleValue}  
        </div>
    </div>
  )
}




