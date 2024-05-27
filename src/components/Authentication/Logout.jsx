import React, { useContext } from 'react'
import { usercontext } from '../Contextapi/Contextapi'

const Logout = () => {
    const user = useContext(usercontext)

    const logouthandler = (e) => {
        localStorage.removeItem('user')
        user.setemail("")
    }

  return (
    <>
    <button onClick={logouthandler}>Logout</button>
    </>
  )
}

export default Logout