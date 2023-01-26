import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';
import Profile from '../Login&signup/Profile';
export default function Privateroute(child) {
    const auth=useSelector((store)=>{return store.isAuth});

  return (
    <div>
        {
                 auth ? <Profile/> : child.children
        }
    </div>
  )
}