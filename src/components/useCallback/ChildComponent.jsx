import React from "react";

// eslint-disable-next-line react/display-name
const ChildComponent = React.memo (

    ({buttonName,handleClick}) => {
        console.log("Child component go re-rendeer again")
      return (
        <div>
            <button onClick={{handleClick}}>
            {buttonName}
        </button>
        </div>
      )
    }

) ;

export default ChildComponent
//React.memo -> wrap -> component ->component re-render tabhi hoga jab props chnage honge nai to re-render nahni hoga

//if u r sending a function then react.memo wont be able to save you from re-rendering