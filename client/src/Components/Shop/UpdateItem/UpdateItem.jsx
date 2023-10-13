import React from 'react';
import './styles.css'

const UpdateItem = () => {
    return (
        <div className='main-container'>
            <div className="container">
                <div style={{ marginTop: '70px' }}>
                    <h1>Update Items</h1>
                    <form action="#" method="POST">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="itemName">Item Name:</label>
                                <input type="text" id="itemName" name="itemName" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemCategory">Category:</label>
                                <select id="itemCategory" name="itemCategory" required>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Groceries">Groceries</option>
                                    <option value="Furniture">Furniture</option>
                                    {/* Add more categories as needed */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="brand">Brand:</label>
                                <input type="text" id="brand" name="brand" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="unitPrice">Unit Price:</label>
                                <input type="text" id="unitPrice" name="unitPrice" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="itemQuantity">Quantity:</label>
                                <input type="number" id="itemQuantity" name="itemQuantity" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shelfLife">Shelf Life:</label>
                                <input type="number" id="shelfLife" name="shelfLife" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="shelfNo">Shelf No.:</label>
                                <input type="number" id="shelfNo" name="shelfNo" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="handler">Handler:</label>
                                <input type="text" id="handler" name="handler" required />
                            </div>
                        </div>

                        <div className="form-group ">
                            <label htmlFor="itemDescription" >Description:</label>
                            <textarea id="itemDescription" name="itemDescription" style={{ width: '100%' }} required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">Update Item</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default UpdateItem;
