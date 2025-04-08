// src/components/Form.js
import  { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UseForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData")) || [];
    setStoredData(data);
  }, []);

  const onSubmit = (data) => {
    const updatedData = [...storedData, data];
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setStoredData(updatedData);
    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Submit Your Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Enter your name"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Submit</button>
      </form>
      <h3 className="text-lg font-semibold mt-6">Stored Data:</h3>
      <ul className="mt-2 space-y-2">
        {storedData.map((item, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded-lg">{item.name} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseForm;
