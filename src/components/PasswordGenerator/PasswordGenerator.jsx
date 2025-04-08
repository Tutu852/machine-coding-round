import { useState,useCallback,useEffect ,useRef} from 'react'
//for taking the reference we use the useRef hooks



const PasswordGeneretor = () => {
    const [length,setLength] =useState(8);
    const [numberAllowed,setNumberAllowed] =useState(false);
    const [charAllowed,setCharAllowed] =useState(false);
    const [password,setPassword] = useState("");

    const passwordRef = useRef(null);

    //ye useCallback not responsible for run the code but it responsible for momoiese/cache the code.this is not same as useEffect hook this [length,numberAllowed,charAllowed] this is used for optimise the code.

    //usecallback  memorise the function what ever he need
    const PasswordGenerator = useCallback(()=> {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed ) str += "0123456789";
      if(charAllowed ) str += "~!@#$%^&*()_+`";

      for(let i=1;i<= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)

    },[length,numberAllowed,charAllowed ,setPassword])
    //this useEffect use for when we change some think in the code then re-render the code again and again  .
    
  
    const copyPasswordToClipboard = useCallback(() => {
      //for optional select we use the ?
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(password);
    }, [password])

    useEffect(()=>{
      PasswordGenerator()
    },[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-600 text-xl">
      <h1 className='text-orange-700 text-center my-3 text-xl'>Password generator</h1>
    
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-green-800'
        >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            
            <label >Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            value={numberAllowed}
           id='numberInput'
           onChange={()=>{
            //this setNumberAllowed is doing in setNumberAllowed the default value is false so when i did prev => !prev if the value is not false then it will show true;
            setNumberAllowed((prev) => !prev)
           }}
        />
        <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            value={charAllowed}
           id='charInput'
           onChange={()=>{
            setCharAllowed((prev) => !prev)
           }}
        />
        <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordGeneretor