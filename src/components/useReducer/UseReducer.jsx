

import { useReducer } from "react";

// state represents the current value of the counter
// action is an object that describes what should happen to the state (e.g., increment, decrement, reset)
const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1; // increases the counter by 1
        case "DECREMENT":
            if (state <= 0) {
                return state; // keeps the counter at 0 if it's already 0 or less
            }
            return state - 1; // decreases the counter by 1
        case "RESET":
            return 0; // sets the counter back to 0
        default:
            return state; // returns the current state unchanged if action type is unrecognized
    }
};

const UseReducer = () => {
    //in useReducer i need two thing the above counterReducer and InitalState;
    const [count,dispatch] = useReducer(counterReducer,0);
  return (
    <div className="flex flex-col items-center p-10">
        <h1 className="text-3xl font-bold mb-4">Counter:{count}</h1>
        <div className="flex gap-4">
            <button className= "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={()=>dispatch({type:"INCREMENT"})}>
                Increment
            </button>
            <button className= "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={()=>dispatch({type:"DECREMENT"})}>
                Decrement
            </button>
            <button className= "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={()=>dispatch({type:"RESET"})}>
                Reset
            </button>
        </div>
    </div>
  )
}

export default UseReducer