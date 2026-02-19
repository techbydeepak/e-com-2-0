import React, { useState } from 'react'
import "../CSS/LoginSignup.css"

const LoginSignup = () => {

  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {

    if (isLogin) {
      // LOGIN
      const storedUser = JSON.parse(localStorage.getItem("user"))

      if (!storedUser) {
        alert("No user found. Please signup first.")
        return
      }

      if (
        storedUser.email === email &&
        storedUser.password === password
      ) {
        const fakeToken = "token_" + Date.now()
        localStorage.setItem("token", fakeToken)
        alert("Login Successful ✅")
        window.location.href = "/"
      } else {
        alert("Invalid credentials ❌")
      }

    } else {
      // SIGNUP
      if (!name || !email || !password) {
        alert("Please fill all fields")
        return
      }

      const userData = { name, email, password }
      localStorage.setItem("user", JSON.stringify(userData))

      alert("Signup Successful ✅ Now Login")
      setIsLogin(true)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <div className='loginsignup-fields'>

          {!isLogin && (
            <input
              type='text'
              placeholder='Your Name'
              onChange={(e)=>setName(e.target.value)}
            />
          )}

          <input
            type='email'
            placeholder='Email'
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </div>

        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={()=>setIsLogin(!isLogin)}
            style={{cursor:"pointer", color:"#ff4141"}}
          >
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>

      </div>
    </div>
  )
}

export default LoginSignup
