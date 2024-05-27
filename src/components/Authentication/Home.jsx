import React, { useContext } from 'react'
import { usercontext } from '../Contextapi/Contextapi'
import Logout from './Logout'

const Home = () => {
    // to use context api  data
    const user = useContext(usercontext) // user have {email, setemail}

  return (
    <>
    <h1>Welcome {user.email} !</h1>
    <Logout/>
    </>
  )
}

export default Home