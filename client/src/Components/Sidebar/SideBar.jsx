import React, { useState } from 'react'
import './styles.css'

const SideBar = ({side_toggle}) => {

    const [sub_nav, setsub_nav] = useState(false)

    function toggleSubNav() {
            setsub_nav(!sub_nav);
        
    }

    return (
        <div className='sidebar'>
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus'></i>
                <span className="logo_name">Inventory</span>
            </div>
            <ul className="nav-links" >
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
                <li onClick={toggleSubNav}>
                    <a href="#">
                        <i className='bx bx-coin-stack' ></i>
                        <span className="links_name">Stock Control</span>
                    </a>
                </li>
                {sub_nav ? <div className='sub-nav'>
                    <ul className="nav-links" style={{ 'margin-top': '0px' }}>
                        <li><a href="#">
                            <i class='bx bx-plus-circle'></i>
                            <span className="links_name">Add Item</span>
                        </a></li>

                        <li>
                            <a href="#">
                                <i class='bx bxs-edit-alt'></i>
                                <span className="links_name">Update Stock</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class='bx bx-minus-circle'></i>
                                <span className="links_name">Delete an item</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-list-ul' ></i>
                                <span className="links_name">View stock</span>
                            </a>
                        </li>
                    </ul>
                </div> : ""}

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