import React from 'react';
import './styles.css'

const ViewItemH = () => {
    return (
        <div className='main-container'>
            <div className="container">
                <div style={{ marginTop: '70px' }}>
                    <h1>View Items</h1>
                    <form action="#" method="POST">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="itemName">Item Name:</label>
                                <input type="text" id="itemName" name="itemName" readOnly={true} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemCategory">Category:</label>
                                <select id="itemCategory" name="itemCategory" readOnly={true} required>
                                    <option value="Electronics">Diagnostic Equipment</option>
                                    <option value="Clothing">Medical Kit</option>
                                    <option value="Groceries">Pharmaceuticals</option>
                                    {/* Add more categories as needed */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="brand">Department:</label>
                                <input type="text" id="brand" name="brand" readOnly={true} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="unitPrice">Unit Price:</label>
                                <input type="text" id="unitPrice" name="unitPrice" readOnly={true} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="itemQuantity">Quantity:</label>
                                <input type="number" id="itemQuantity" name="itemQuantity" readOnly={true} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exdate">Expiry Date :</label>
                                <input type="date" id="exdate" name="exdate" style={{ width: '100%', height: '65%' }} readOnly={true} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shelfNo">Supplier:</label>
                                <input type="text" id="supplier" name="supplier" readOnly={true} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="handler">Handler:</label>
                                <input type="text" id="handler" name="handler" readOnly={true} required />
                            </div>
                        </div>

                        <div className="form-group ">
                            <label htmlFor="itemDescription" >Description:</label>
                            <textarea id="itemDescription" name="itemDescription" style={{ width: '100%' }} readOnly={true} required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">View Item</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default ViewItemH;
