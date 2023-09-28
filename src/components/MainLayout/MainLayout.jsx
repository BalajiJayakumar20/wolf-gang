import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>MainLayout

        <Link to='/'>Home</Link>
        <Link to='/reels'>Reels</Link>
        <Link to='/chat'>Chat</Link>
        <Link to='/saved'>Saved</Link>

        <Outlet />
    </div>
  )
}

export default MainLayout