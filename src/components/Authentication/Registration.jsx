import React, { useContext, useState } from 'react'
import { usercontext } from '../Contextapi/Contextapi'
import { Link } from 'react-router-dom'

const Registration = () => {
    const user = useContext(usercontext)

    const [data,setdata] = useState({
        email: "",
        password: "",
    })

    const submiithandler = (e) => {
        e.preventDefault()
       
        localStorage.setItem('user',JSON.stringify({email: data.email}))

        user.setemail(data.email)

        console.log(user.email)
    }

  return (
    <>
    <h1>Registration !</h1>

    <form onSubmit={submiithandler}>
        <label htmlFor="email">Email id</label>
        <input type="email" value={data.email} id='email' onChange={(e) => setdata({...data, email: e.target.value})}/>

        <label htmlFor="password">Password</label>
        <input type="password" value={data.password} id='password' onChange={(e) => setdata({...data, password: e.target.value})}/>

        <Link to='/login'>Already have an account ?</Link>

        <button type='submit'>Register</button>
    </form>
    </>
  )
}

export default Registration