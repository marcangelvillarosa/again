"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState({}); 
  const [successMessage, setSuccessMessage] = useState(null); 
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => { 
    navigate('/RegisterPage')
}


  
  const onSubmit = (formData) => {setData({
      name: formData.name,
      email: formData.email,
    });

  };
  return (
      <div className="w-sreen h-screen flex justify-center items-center">
      
       <div className="w-[17%] h-[50%] bg-white">

        <form onSubmit={handleSubmit(onSubmit)} className="w-[100%] h-[100%] ">


            <div className="w-[100%] h-[15%] flex justify-center items-center bg-gray-500">
                <h1>Login</h1>
            </div>

         
          <div className="w-[100%] h-[50%] flex items-center flex-col justify-evenly ">
            
             <div className="flex justify-center item flex-col w-[90%] h-[30%] relative z-10">
                <h1 className="text-xs text-black">Email</h1>
                  <input
                      className="text-xs border-black border text-black pl-2 pr-3 pt-1 pb-1 outline-none"
                      {...register("email", {
                        required: true, 
                        pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,    
                        message: "Email must end with @gmail.com" }})}/>
                    {errors.email && <p className="text-red-500 text-xs absolute bottom-0 h-[5%]">{errors.email.message}</p>}
              </div> 
             
            <div className="flex justify-center item flex-col w-[90%] h-[30%] relative">
              <h1 className="text-xs text-black">Password</h1>
                  <input
                    type="password"
                    className="text-xs border-black border text-black pl-2 pr-3 pt-1 pb-1 outline-none"
                    {...register("name", {
                    required: true, 
                    minLength: { value: 8, 
                    message: "Password must be at least 8 characters long" } })}/>
                  {errors.name && <p className="text-red-500 text-xs absolute bottom-0 h-[5%]">{errors.name.message}</p>}
            </div>    
               
          </div>
            
           <div className="w-[100%] h-[20%] flex justify-center items-center">

                <button
                  className="bg-gray-500 text-xs pl-3 pr-3 pt-1 pb-1 rounded mr-1">
                  <span>Submit</span>
                </button>

                <button
                 className="bg-green-500 text-xs pl-3 pr-3 pt-1 pb-1 rounded ml-1"
                 onClick={handleRegister}>
                    Register
                </button>
            </div>      
         
         <div className="w-[100%] h-[10%] flex justify-center items-center">
            {successMessage && (
            <p className="text-green-500 text-xs">{successMessage}</p>)} 
         </div>
                 
          

          </form>

          

       

       </div>
          
       </div>
  );
}
