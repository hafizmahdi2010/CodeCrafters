import React, { useState } from 'react';
import {Link ,useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usError, setUsError] = useState("");
  const [psError, setPsError] = useState("");

  const [error, setError] = useState("")

  function handleTogglePassword() {
    const passwordInput = document.querySelector(".password");
    const pwdIcon = document.querySelector(".pwdIcon");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    pwdIcon.classList.toggle("ri-eye-line");
    pwdIcon.classList.toggle("ri-eye-off-line");
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    if (username.trim() === "") {
      setUsError("Username is required");
    } else {
      setUsError("");
    }

    if (password.trim() === "") {
      setPsError("Password is required");
    } else {
      setPsError("");
    }

    if (username && password) {
      console.log("Submitting...");
      // Perform login logic here

      fetch(`http://127.0.0.1:8000/loginUser`, {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Result', data);
          if (data.fale == 1) {
            setError(data.msg)
          }
          else{
            setError("");

            localStorage.setItem("isLoggedIn",true)
            localStorage.setItem("userId",data.userId);
            localStorage.setItem("username",data.username);
            localStorage.setItem("email",data.email);

            navigate("/")
          }
        })
        .catch((error) => console.error('Error fetching data:', error));

    }
  }

  return (
    <>
      <div className="el-center-div" style={{ height: "100vh" }}>
        <form onSubmit={handleSubmitForm} className="form shadow-2xl">
          <h3 className='mb-3 text-2xl'>Login</h3>

          <label htmlFor="username">Enter Your Username</label>
          <div className="inputDiv">
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Enter Your Username' id='fromInput username' name='username' />
          </div>
          <span className="error">{usError}</span>

          <label htmlFor="password">Enter Your Password</label>
          <div className="inputDiv">
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Your Password' className='password' id='fromInput password' name='password' />
            <i className="ri-eye-line text-2xl mr-2 cursor-pointer pwdIcon" onClick={handleTogglePassword}></i>
          </div>
          <span className="error">{psError}</span>

          <p className='mt-3'>Don't Have An Account <Link to="/signUp" className='text-blue-700 loginLinkBtn'>Sign Up</Link></p>
         
           <span className='error'>{error}</span>

          <button className="btnBlue mt-3 bg-blue-500" type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
