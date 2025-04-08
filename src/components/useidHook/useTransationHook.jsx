import { useState, useTransition } from "react";


const useTransationHook = () => {
    const [input,setInput] = useState("");
    const [results,setResults] = useState([]);

    const [isPending,startTransition] = useTransition();
    //simulate an expensive calcualtionk

    const runExpensiveCalculation =(value) =>{
        const calculationResults = [];

        for(let index = 0;index <99999999;index++) {};

        //simulate heavy work by running many calculatiokns
        for(let i = 0;i<20000;i++){
            const result = i * parseInt(value || "0" , 10);
            if(i % 1000 === 0){
                calculationResults.push(result);
            }
        }
        return calculationResults;
    };

    const handleInputChange = (e) =>{
        const NewValue = e.target.value;
        setInput(NewValue);

        //Defer the expensive calculation 
        startTransition(()=>{

            const calculationResults = runExpensiveCalculation(NewValue);
            setResults(calculationResults)
        })
    }
  return (
    <div>
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-xl font-bold mb-4">UseTransition Demo</h2>

            <div className="mb-4">
                <label className="block mb-2">
                    Enter a number:
                <input type="number"
                value={input}
                onChange={handleInputChange}
                className="ml-2 border p-2 rounded"
                />
                </label>
            </div>
            {
                isPending ? ("Loading..."  
                ):(
                    <div>
                        <h3 className="font-semibold mb-2 ">Result</h3>
                        <ul className="border rounded p-4 bg-gray-50">
                            {
                                results.map((result,index)=>(
                                    <li key={index}>{index * 1000} *{input} = {result}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default useTransationHook