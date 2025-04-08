import { useRef, forwardRef, useState } from 'react';

// Create a custom input component that forwards its ref to the underlying <input>
// eslint-disable-next-line react/display-name
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function forwardRefex() {
  const [data , setData] = useState("");
  // Create a ref in the parent component
  const inputRef = useRef(null);

  // When the button is clicked, focus the input field using the forwarded ref
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleChange = (e)=>{
    setData(e.target.value);
  }

  return (
    <div>
        <div>
          <h2>Using forwardRef in React</h2>
          <CustomInput ref={inputRef} placeholder="Enter some text"
          value={data}
          onChange ={handleChange}
          />
          <button onClick={handleFocus}>Focus the Input</button>
        </div>
        <div>
          <p ref={inputRef} >data</p>
        </div>
    </div>
  );

}

export default forwardRefex;

//
//
//this is another way to get data in paragraph using ref

// function ForwardRefEx() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <h2>Using forwardRef in React</h2>
//       <CustomInput ref={inputRef} placeholder="Enter some text" />
//       <button onClick={handleFocus}>Focus the Input</button>
//       <p>{inputRef.current?.value || ''}</p>
//     </div>
//   );
// }