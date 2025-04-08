import { useEffect, useState } from "react"


const useGetQuery = (confi={}) => {
    const [data,setData] = useState();
    const [loading,setLoading] = useState(true);
//when we use async here it convert this in to a promise
//async always return promise doesnot matter it will return function object what ever i want to return it will return as promise resolve funtion.although i am returning it then also it will not give the answer
    // useEffect(async ()=>{
    //    const res = await fetch(confi.url)
    //     .then((res)=> res.json())
    //     .then((res) => setData( res))
    //     .catch((err)=>console.log(err))
    //     .finally(() => setLoading(false));
    //     return () =>{};
    // },[]);
    useEffect( ()=>{
        fetch(confi.url)
        .then((res)=> res.json())
        // .then((res)=>console.log("res",res))
        .then((res) => setData( res))
        .catch((err)=>console.log(err))
        .finally(() => setLoading(false));
        return () =>{};
    },[]);
  return {data,loading}
  
}

export default useGetQuery