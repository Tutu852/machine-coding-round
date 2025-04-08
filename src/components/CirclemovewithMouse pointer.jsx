import { useEffect,useRef } from "react";
import Circle from "./Circle"

const CircleMoveWithMouse = () => {
//   const circleRef = useRef();

//   const handleMouseMove = (event) => {
//     if (circleRef.current) {
//       const circle = circleRef.current;
//       console.log("moving mouse",event)
//       circle.style.left = `${event.clientX - 25}px`;
//       circle.style.top = `${event.clientY - 25}px`;
      
//     }
//   };

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       style={{
//         height: "100vh",
//         width: "100vw",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         ref={circleRef}
//         style={{
//           position: "absolute",
//           height: "50px",
//           width: "50px",
//           backgroundColor: "blue",
//           borderRadius: "50%",
//           transition: "all 0.2s ease-out", // Smooth transition effect
//         }}
//       ></div>
//     </div>
//   );
// };

// export default CircleMoveWithMouse;


const circleRef = useRef(); 
const handleMouseMove = (e) => {
    const circle = circleRef.current;
    setTimeout(()=>{
        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY}px`;
    },200)
};
console.log('circleRef',circleRef);

useEffect(() => {
  // Attach the event listener to the window object
  window.addEventListener("mousemove", handleMouseMove);

///i did removeEventListener  because when we exit from we also need to make sure that we should clear all the eventlistner because they no longer reuired
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

return (
  <div className="h-screen bg-blue-100  ">
    <div className="relative">
      <Circle ref={circleRef}/>
    </div>
  </div>
);

};

export default CircleMoveWithMouse;