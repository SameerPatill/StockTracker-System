import React from 'react'
import './styles.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus'></i>
                <span className="logo_name">Inventory</span>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#" className="active">
                        <i className='bx bx-grid-alt' ></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-box' ></i>
                        <span className="links_name">Product Sales</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-list-ul' ></i>
                        <span className="links_name">Inventory</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-coin-stack' ></i>
                        <span className="links_name">Stock Control</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-book-alt' ></i>
                        <span className="links_name">Suppliers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-cog' ></i>
                        <span className="links_name">Setting</span>
                    </a>
                </li>
                <li className="log_out">
                    <a href="#">
                        <i className='bx bx-log-out'></i>
                        <span className="links_name">Log out</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar