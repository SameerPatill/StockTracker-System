import React from 'react';

const Dashboard = () => {
    return (
        <section class="home-section">
            <div className="home-content">
                <div className="overview-boxes">
                    <div className="box">
                        <div className="right-side">
                            <div className="box-topic">Total Purchase</div>
                            <div className="number">40,876</div>
                            <div className="indicator"></div>
                        </div>
                        <i className='bx bx-cart-alt cart'></i>
                    </div>
                    <div className="box">
                        <div className="right-side">
                            <div className="box-topic">Total Sales</div>
                            <div className="number">38,876</div>
                            <div className="indicator"></div>
                        </div>
                        <i className='bx bxs-cart-add cart two'></i>
                    </div>
                    <div className="box">
                        <div className="right-side">
                            <div className="box-topic">Total Drafts</div>
                            <div className="number">$12,876</div>
                            <div className="indicator"></div>
                        </div>
                        <i className='bx bx-cart cart three'></i>
                    </div>
                    <div className="box">
                        <div className="right-side">
                            <div className="box-topic">Cancelled</div>
                            <div className="number">11,086</div>
                            <div className="indicator"></div>
                        </div>
                        <i className='bx bxs-cart-download cart four'></i>
                    </div>
                </div>

                <div className="sales-boxes">
                    <div className="recent-sales box">
                        <div className="title">Recent Sales</div>
                        <div className="sales-details">
                            <ul className="details">
                                <li className="topic">ID</li>
                                <li><a href="#">$204.98</a></li>
                                <li><a href="#">$24.55</a></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Date</li>
                                <li><a href="#">02 Jan 2021</a></li>
                                <li><a href="#">02 Jan 2021</a></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Customer</li>
                                <li><a href="#">Alex Doe</a></li>
                                <li><a href="#">David Mart</a></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Status</li>
                                <li><a href="#">Delivered</a></li>
                                <li><a href="#">Pending</a></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Total</li>
                                <li><a href="#">$204.98</a></li>
                                <li><a href="#">$24.55</a></li>
                            </ul>
                        </div>
                        <div className="button">
                            <a href="#">See All</a>
                        </div>
                    </div>
                    <div className="top-sales box">
                        <div className="title">Top Selling Product</div>
                        <ul className="top-sales-details">
                            <li>
                                <a href="#">
                                    <img src="images/sunglasses.jpg" alt="" />
                                    <span className="product">Vuitton Sunglasses</span>
                                </a>
                                <span className="price">$1107</span>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/jeans.jpg" alt="" />
                                    <span className="product">Hourglass Jeans </span>
                                </a>
                                <span className="price">$1567</span>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/nike.jpg" alt="" />
                                    <span className="product">Nike Sport Shoe</span>
                                </a>
                                <span className="price">$1234</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
