import { useEffect, useState } from "react";


const Practice =() =>{
    const [formData,setFormData] = useState({name:"",email:"",phone:""});
    const [storedData,setStoredData] = useState([]);

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("formData") || []);
        setStoredData(data);
    })

    const handleChange=(e)=>{
        setFormData({...FormData,[e.target.name]:e.target.value});
    }
    const handleSubmit =(e)=>{
        //Name validation: only letters (space allowed)
        const nameRegex = /^[A-Za-z\s]+$/;
        if(!nameRegex.test(FormData.name)){
            alert("Invalid name");
            return;
        }
        //Email validation: only letters, numbers, and special characters
        if(!FormData.email.include("@")){
            alert("Invalid email");
            return;
        }
        //phone number validation : Only digits (no letters or special characters)
        const phoneRegex = /^[0-9]+$/;
        if(!phoneRegex.phone.test(formData.phone)){
            alert("Invalid phone number");
            return;
        }
        e.preventDefault();
        const updateData = [...storedData,formData];
        localStorage.setItem("fomData",JSON.stringify(updateData));
        setStoredData("updateData");
        setFormData({name:"",email:"",phone:""});
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl  font-bold text-center">Submit Your Form</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                value={FormData.name}
                onChange={handleChange}
                required
                placeholder="Enter Your Name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input 
                type="text"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                required
                placeholder="Enter Your email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2
                focus:ring-blue-600"
                />
                <input 
                type="number"
                name="phone"
                value={FormData.phone}
                onChange={handleChange}
                required
                placeholder="Enter Your phone no"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2
                focus:ring-blue-600"
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:lg-blue-600">
                    Submit
                </button>

                <h3 className="text-lg font-semibold mt-6">Stored Data</h3>
                <ul className="mt-6 space-y-2">
                    {
                        storedData.map((item,index)=>{
                            <li key={index} className="p-2 bg-gray-200 rounded-lg">
                                {item.name} - {item.email} -{item.phone};
                            </li>
                        })
                    }

                </ul>
            </form>
        </div>
    )
}

export default Practice;