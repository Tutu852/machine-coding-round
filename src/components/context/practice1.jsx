// import { createContext } from 'react'
// import ChildComponents from './ChildComponents';


// const practice1 = () => {
//     const UserContext = createContext();
//   return (
//     <UserContext.Provider value="john">
//         <ChildComponents/>
//     </UserContext.Provider>
//   )
// }

// export default practice1

import  { createContext } from 'react'
import ChildComponents from './ChildComponents';

const practice1 = () => {
  const userContext = createContext();
  return (
    <userContext.Provider value="john">
      <ChildComponents/>
    </userContext.Provider>
  )
}

export default practice1