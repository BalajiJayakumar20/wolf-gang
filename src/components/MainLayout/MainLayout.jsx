import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './MainLayout.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function SideNav({sideNav, setSideNav}) {
    return (
        <div className='expanded_side_menu'>
            <CloseIcon onClick={() => setSideNav(false)} />
            <Link to='/saved'>Saved</Link>
        </div>
    )
}

function MainLayout() {
    const [isSideNavOpen, setSideNavOpen] = useState(false)
  return (
    <div className='main_layout'>
        <div className="outlet_wrapper">
        <Outlet />
        </div>

        <div className="side_nav_wrapper" style={{width: isSideNavOpen ? '150px' : '30px'}}>
            {!isSideNavOpen ? <MenuIcon onClick={() => setSideNavOpen(true)} /> : ''}
            {isSideNavOpen ? <SideNav sideNav={isSideNavOpen} setSideNav={setSideNavOpen} /> : ''}
        </div>
        <div className="app_links">
            <div className="link_wrapper">
                <Link className='link' to='/'>Home</Link>    
            </div>
            <div className="link_wrapper">
                <NavLink className='link' to='/reels'>Reels</NavLink>    
            </div>
            <div className="link_wrapper">
                <NavLink className='link' to='/chat'>Chat</NavLink>       
            </div>
        </div>
    </div>
  )
}

export default MainLayout