import React from 'react';
import './styles.css'; // Import your CSS file

class InvMgt extends React.Component {
    render() {
        return (
            <div className="container">
                <div style={{ marginTop: '70px' }}>
                    <h1 className="bill-header">Billing Invoice</h1>

                    {/* Company Details and Date & Time Section */}
                    <div className="company-date-section">
                        <div className="company-details">
                            <div className="col-md-6">
                                <h4>Company Details:</h4>
                                <address>
                                    Your Company Name<br />
                                    Address: 123 Main Street<br />
                                    City: Your City<br />
                                    Phone: (123) 456-7890<br />
                                </address>
                            </div>
                        </div>
                        <div className="date-time-details">
                            <div className="col-md-6 text-right">
                                <h4>Date & Time:</h4>
                                <p>Date: October 09, 2023</p>
                                <p>Time: 10:00 AM</p>
                            </div>
                        </div>
                    </div>

                    {/* Inventory Details */}
                    <h2>Inventory Details</h2>
                    <table className="bill-table inventory-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price per Unit</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Replace the rows below with your inventory data */}
                            <tr>
                                <td>Item 1</td>
                                <td>10</td>
                                <td>$20</td>
                                <td>$200</td>
                            </tr>
                            <tr>
                                <td>Item 2</td>
                                <td>5</td>
                                <td>$15</td>
                                <td>$75</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>

                    {/* Calculate Total Cost */}
                    <h3 className="bill-total">Total Cost of Inventory: <span className="total-cost">$275</span></h3>

                    {/* Items to be Ordered */}
                    <h2>Items to be Ordered</h2>
                    <ul className="order-list">
                        {/* Replace the list items below with items that need to be ordered */}
                        <li>Item 3 - Estimated Cost: $50</li>
                        <li>Item 4 - Estimated Cost: $30</li>
                        {/* Add more list items as needed */}
                    </ul>

                    {/* Download as PDF Button */}
                    <div className="text-center download-pdf-button">
                        <button id="download-pdf-btn" className="btn btn-primary">Download as PDF</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default InvMgt;
