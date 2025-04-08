// import { useCallback, useState } from "react";
// import ChildComponent from "./ChildComponent";

// const UseCallback = () => {
//     const [count,setCount] = useState(0);
//     //this useCallback is frezzing the function while the count increase then it will run it will not go to childcomponent  
//     let handleClick = useCallback(() =>{
//         setCount(count+1)
//     },[count]);

//   return (
//     <div>
//         <div>
//             <h1>Count:{count}</h1>
//         </div>
//         <div>
//             <button onClick={handleClick}> increment</button>
//         </div>
//         <br />
//         <div>
//             <ChildComponent buttonName="Click me"
//             //it create  another function
//             handleClick={handleClick}
//             />
//         </div>
//     </div>
//   )
// }

// export default UseCallback



//handle expensiveTask
//usecallback hook will help to stoping of function re-creation and help to not create the function-reference when i click the button then it alway create a new function-reference 

import { useCallback,  useRef,  useState,useEffect } from "react"


export const UseCallback = () => {
    const [count,setCount] = useState(0);
    const [input,setInput] = useState(0);

    const previousFunction = useRef(null);
    
    //to solve this expensive re-render 
    // if the input is same then previous value useMemo store that value to tackel with expensive re-render 
  
    const expensiveTask = useCallback(()=>{
        console.log("Inside expensive task")
        let result = 0;
        for(let i=0;i<=1000000000;i++){
            console.log(i);
        }
        return result;
    },[count]);
  
    useEffect(() => {
      if(previousFunction.current){
            if(previousFunction.current === expensiveTask){
                console.log("same function");
            }else{
                console.log("different function");
            }
      }else{
        previousFunction.current = expensiveTask
      }
      
    }, [expensiveTask])
    

    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
        <div>
            Count: {count}
        </div>
        {/* here i am what ever i enter i get double value  */}
        <input type="text"
        placeholder="Enter number"
        value={input}
        onChange={(e) =>setInput(e.target.value)}
        />
       <p>Expensive Calculation result:{expensiveTask()}</p>
    </div>
  )
}




