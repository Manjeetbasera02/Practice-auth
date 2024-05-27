import { createContext, useEffect, useState } from "react";

export const usercontext = createContext("")

export const Contextprovider = ({children}) => {
    const[email, setemail] = useState("")
    
    useEffect(()=> {
        const user_storage = localStorage.getItem('user') // [user] = {email : manj.......@gmail.com}

        try {
            setemail(JSON.parse(user_storage).email)

        } catch (error) {
            setemail(null)
        }
        
    },[])

   return (
    <usercontext.Provider value={{email,setemail}}>
        {children}
    </usercontext.Provider>
   )

}