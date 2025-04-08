import { useEffect, useState } from "react"


const formvalidation2 = () => {
    const [formData,setFormData]= useState({name:"",email:"",phone:""})
    const [storedData,setStoredData] = useState([]);

    useEffect(( )=>{
        //this take data from the local storage if any thing present 
        const data = JSON.parse(localStorage.getItem("formData") || []);
        setStoredData(data);
    },[])

    const handleChange =(e) =>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit =(e)=>{
             // Name validation: Only letters (spaces allowed)
             const nameRegex = /^[A-Za-z\s]+$/;
             if (!nameRegex.test(formData.name)) {
                 alert("Please enter a valid name (letters only, no numbers or special characters).");
                 return;
             }
     
             // Phone number validation: Only digits (no letters or special characters)
             const phoneRegex = /^[0-9]+$/;
             if (!phoneRegex.test(formData.phone)) {
                 alert("Please enter a valid phone number (digits only, no letters or special characters).");
                 return;
             }
             //this is validate the email
        if(!formData.email.includes("@")){
            alert("Please enter a valid email");
            return;
        }
        e.preventDefault();
        const updateData = [...storedData,formData];
        localStorage.setItem("formData",JSON.stringify(updateData));
        setStoredData("updateData");
        setFormData({name:"",email:"",phone:""});
    }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"> 
        <h2 className="text-2xl font-bold text-center">Submit your form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button type="submit " className="w-full bg-blue-500 text-white py-2 rounded-lg hover:lg-blue-600">
                Submit
            </button>
            <h3 className="text-lg font-semibold mt-6"> Stored Data</h3>

            <ul className="mt-2 space-y-2">
                {storedData.map((item,index)=>(
                        <li key={index} className="p-2 bg-gray-200 rounded-lg ">
                            {item.name} - {item.email}
                        </li>
                ))
                }
            </ul>
            
        </form>
    </div>
  )
}

export default formvalidation2