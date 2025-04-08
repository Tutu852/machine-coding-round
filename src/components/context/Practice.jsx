import { createContext } from "react";
import Childcomponent from "./Childcomponent";

const UserContext = createContext();

const Practice =()=>{
    return (
        <UserContext.Provider value="john">
          <Childcomponent />
        </UserContext.Provider>
      );
}

export { UserContext };
export default Practice;
