import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("")

  // errors

  const [usError, setUsError] = useState("");
  const [nmError, setNmError] = useState("");
  const [emError, setEmError] = useState("");
  const [nuError, setNuError] = useState("");
  const [psError, setPsError] = useState("");

  function handelTogglePassword() {
    let password = document.querySelector(".password");
    let pwdIcon = document.querySelector(".pwdIcon");
    if (password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
      pwdIcon.classList.replace("ri-eye-line", "ri-eye-off-line")
    }
    else {
      password.setAttribute("type", "password");
      pwdIcon.classList.replace("ri-eye-off-line", "ri-eye-line")
    }
  }

  function handelSubmitForm(e) {
    e.preventDefault()

    if (username === "") {
      setUsError("User Name Is Required");
    }

    else if (name === "") {
      setNmError("Name Is Required");
      setUsError("");
    }

    else if (email === "") {
      setEmError("Email Is Required");
      setUsError("");
      setNmError("");
    }
    else if (!isValidEmail(email)) {
      setEmError('Invalid Email Format!');
      setUsError("");
      setNmError("");
    }

    else if (number === "") {
      setUsError("Number Is Required");
      setUsError("");
      setNmError("");
      setEmError("");
    }

    else if (password === "") {
      setPsError("Password Is Required");
      setUsError("");
      setNmError("");
      setEmError("");
      setNuError("");
    }
    else {
      setUsError("");
      setNmError("");
      setEmError("");
      setNuError("");
      setPsError("");
      console.log("submiting...")

      // Call The API
      fetch(`http://127.0.0.1:8000/signUpUser`, {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
          username: username,
          name: name,
          email: email,
          number: number,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Result', data);
          if (data.fale == 1) {
            setError(data.msg)
          }
        })
        .catch((error) => console.error('Error fetching data:', error));


    }

  }


  const isValidEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }


  return (
    <>
      <div className="el-center-div" style={{ height: "100vh" }}>

        <form onSubmit={handelSubmitForm} className="form shadow-2xl">

          <h3 className='mb-3 text-2xl'>Sign Up</h3>

          <label htmlFor="username">Enter Your Username</label>
          <div className="inputDiv">
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Enter Your Username' id='fromInput username' name='username' />
          </div>
          <span className="error">{usError}</span>

          <label htmlFor="name">Enter Your Name</label>
          <div className="inputDiv">
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Your Name' id='fromInput name' name='name' />
          </div>
          <span className="error">{nmError}</span>


          <label htmlFor="email">Enter Your Email</label>
          <div className="inputDiv">
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Your Email' id='fromInput email' name='email' />
          </div>
          <span className="error">{emError}</span>


          <label htmlFor="number">Enter Your Number</label>
          <div className="inputDiv">
            <input type="number" onChange={(e) => setNumber(e.target.value)} value={number} placeholder='Enter Your Number' id='fromInput number' name='number' />
          </div>
          <span className="error">{nuError}</span>


          <label htmlFor="number">Enter Your Password</label>
          <div className="inputDiv">
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter Your password' className='password' id='fromInput password' name='password' />
            <i className="ri-eye-line text-2xl mr-2 cursor-pointer pwdIcon" onClick={handelTogglePassword}></i>
          </div>
          <span className="error">{psError}</span>

          <p className='mt-3'>Already Have An Account <Link to="/login" className='text-blue-700 loginLinkBtn'>Login</Link></p>

          <button className="btn mt-4 bg-green-500" type="submit">Submit</button>
        </form>


      </div>
    </>
  )
}

export default SignUp