import React, { useState } from 'react'
import './styles.css'
import SideBar from '../Sidebar/SideBar'

const NavBar = () => {
    const [side_toggle, setside_toggle] = useState(false)

    function sidebar() {
        setside_toggle(!side_toggle)
        console.log("hello")
    }

    return (
        <>
            <section class="home-section">
                <nav>
                    <div className="sidebar-button" onClick={sidebar}>
                        <i className='bx bx-menu sidebarBtn'></i>
                        <span className="dashboard">Dashboard</span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="profile-details">
                        <img src="./src/assets/profile.jpg" alt="" />
                        <span className="admin_name">Username</span>
                        <i className='bx bx-chevron-down'></i>
                    </div>
                </nav>


            </section>

            <SideBar toggle={side_toggle} />
        </>

    )
}

export default NavBar