import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const AdminLogin = () => {

  const navigate = useNavigate()

  const [adminId, setAdminId] = useState("");
  const [adminPwd, setadminPwd] = useState("");

  const [error, setError] = useState("");

  const handelSubmitForm = (e)=>{
    if(adminId === ""){
      setError("Admin Id Is Required !");
    }
    else if(adminPwd === ""){
      setError("Admin Password Is Required !");
    }
    else if(adminId !== "codeCraft"){
      setError("Admin Id Is Wrong !");
    }
    else if(adminPwd !== "codeCraftSecret"){
      setError("Admin Password Is Wrong !")
    }
    else{
      localStorage.setItem("isAdmin",true);
      navigate("/admin");
    }
  }

  return (
    <>
    
    <div className="el-center-div">

      <div className="w-[30%] mx-auto bg-gray-900 rounded-md p-5">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Id</label>
          <input type="text" value={adminId} onChange={(e)=>setAdminId(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Admin Id" />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Ppassword</label>
          <input type="password" value={adminPwd} onChange={(e)=>setadminPwd(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Admin Password" />
        </div>
        <span className="error" >{error}</span>
        <br />
        <button onClick={handelSubmitForm} className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>

    </div>


    </>
  )
}

export default AdminLogin