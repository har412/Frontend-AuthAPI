import React, { useEffect, useState } from 'react'
import { getUser } from '../../Helper/userApi'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
    const [user,setUser] =  useState()
    const [verified,setverified] =  useState(false)
    const navigate = useNavigate()
    const FetchUser = async () =>{
        const response = await getUser() 
        console.log(response)
        setUser(response?.email)
        if(response.verified == true){
            setverified(true)
        }
        
    }
    useEffect(()=>{
        FetchUser()
    },[])

    const handleLogout = () =>{
        localStorage.removeItem('token')
        navigate('/')
    }
  return (
   <>
    <h1>Dashboard</h1>
    <h4>{user ? user : "You are not Logged In"}</h4>
    <h4>{verified ? "You are a verified user" : "You are not a verified user"}</h4>
   {user  &&  <button onClick={handleLogout}>Logout</button>
   }
   </>
  )
}

export default Dashboard