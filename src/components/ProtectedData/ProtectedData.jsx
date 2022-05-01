import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedData({IsLogin}) {
  return (
    <div>{IsLogin?<Outlet /> : <Navigate to='Login'/>}</div>
  )
}
 //// هذا من اجل عمل authentication  