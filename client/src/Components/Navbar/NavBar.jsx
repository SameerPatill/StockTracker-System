import React from 'react'
import './styles.css'

const NavBar = () => {
    return (
        <section class="home-section">
            <nav>
                <div className="sidebar-button">
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
    )
}

export default NavBar