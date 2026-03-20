import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);

    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        payment: 'cod',
    });

    const [submitted, setSubmitted] = useState(false);
    const [finalTotal, setFinalTotal] = useState(0);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = subtotal * 0.12;
    const total = subtotal + tax;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.address || !form.phone) {
            alert("Please complete all fields");
            return;
        }

        setFinalTotal(total);
        clearCart();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div
                className="container mt-5 text-center"
                style={{
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="card shadow-lg p-5">
                    <h2 className="mt-4">Order Confirmed!</h2>
                    <p className="lead">Thank you, {form.name}. Your order has been placed successfully.</p>
                    <p className="h4 text-success">Total Amount: ₱{finalTotal.toFixed(2)}</p>
                    <p className="text-muted mt-3">You will receive a confirmation email at {form.email}</p>
                    <a href="/" className="btn accent-bg text-white btn-lg w-100">Continue Shopping</a>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="mb-4">YOUR CART IS EMPTY</h2>
                            <p className="mb-4">Once you add something to your bag - it will appear here. Ready to get started?</p>
                            <Link to="/products" className="btn accent-bg text-white mt-auto mb-4 px-4 py-3">Get Started</Link>
                        </div>
                    </div>
                </div>

            </>
        );
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Checkout</h2>

            <div className="row">
                {/* Checkout Form */}
                <div className="col-md-7">
                    <div className="card shadow-sm p-4">
                        <h4 className="mb-4">Customer Information</h4>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Delivery Address</label>
                                <textarea
                                    name="address"
                                    className="form-control"
                                    rows="3"
                                    value={form.address}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Payment Method</label>
                                <select
                                    name="payment"
                                    className="form-select"
                                    value={form.payment}
                                    onChange={handleChange}
                                >
                                    <option value="cod">Cash on Delivery</option>
                                    <option value="gcash">GCash</option>
                                    <option value="card">Credit/Debit Card</option>
                                </select>
                            </div>

                            <button type="submit" className="btn accent-bg text-white btn-lg w-100">
                                <i className="fas fa-check-circle me-2"></i>
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="col-md-5">
                    <div className="card shadow-sm p-4">
                        <h4 className="mb-4">Order Summary</h4>

                        <div className="mb-3">
                            {cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between mb-2">
                                    <span>{item.name} × {item.qty}</span>
                                    <span className="fw-bold">₱{(item.price * item.qty).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between mb-2">
                            <span>Subtotal:</span>
                            <span>₱{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Tax (12%):</span>
                            <span>₱{tax.toFixed(2)}</span>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between">
                            <h5>Total:</h5>
                            <h5 className="text-success">₱{total.toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
