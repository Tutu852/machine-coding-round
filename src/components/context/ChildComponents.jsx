// import { useContext } from "react"
// import { UserContext } from "./Practice";


// const ChildComponents = () => {
//     const user = useContext(UserContext);
//   return (
//     <>
//     <p >{user}</p>
//     <h1 className="text-3xl font-bold text-blue-600">Hello in Blue!</h1>

//  </>
//   )
// }

// export default ChildComponents

import { useContext } from "react"
import { UserContext } from "./Practice";

const ChildComponents = () => {
  const user = useContext(UserContext);
  return (
    <>
      {user}
      <h1 className="text-3xl font-bold text-blue-600">Hello in Blue!</h1>
    </>
  )
}

export default ChildComponents