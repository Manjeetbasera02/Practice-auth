import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { usercontext } from '../Contextapi/Contextapi'

const Login = () => {
    const user = useContext(usercontext)

    const [data, setdata] = useState({
        email: "",
        password: "",
    })

    const submithandler = (e) => {
        e.preventDefault()

        console.log(data)
        
        localStorage.setItem('user',JSON.stringify({email: data.email}))

        user.setemail(data.email)
    }

  return (
    <>
    <h1>Login !</h1>
    
    <form onSubmit={submithandler}>
    <label htmlFor="email">Email id</label>
    <input type="email" value={data.email} id='email' onChange={(e) => setdata({...data, email: e.target.value})} />

    <label htmlFor="password">Password</label>
    <input type="password" value={data.password} id='password' onChange={(e) => setdata({...data, password: e.target.value})} />

    <Link to='/regi'>Don't have Account</Link>

    <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login