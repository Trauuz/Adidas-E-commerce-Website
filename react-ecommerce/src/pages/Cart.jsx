import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = subtotal * 0.12;
    const total = subtotal + tax;

    const formatPrice = (value) => {
        return value.toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-7">
                    {cart.length === 0 && (
                        <>
                            <h2 className="mb-4">YOUR CART IS EMPTY</h2>
                            <p className="mb-4">Once you add something to your bag - it will appear here. Ready to get started?</p>
                            <Link to="/products" className="btn accent-bg text-white mt-auto mb-4 px-4 py-3">Get Started</Link>
                        </>
                    )}
                    {cart.map(item => (
                        <div key={item.id} className="card mb-3 shadow-sm">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                                        <h5 className="mb-1">{item.name}</h5>
                                        <small className="text-muted">
                                            ₱{formatPrice(item.price)}
                                        </small>
                                    </div>

                                    <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button onClick={() => decreaseQty(item.id)}
                                                className="btn btn-outline-secondary btn-sm"
                                            >
                                                -
                                            </button>
                                            <span className="mx-3 fw-bold">{item.qty}</span>

                                            <button onClick={() => increaseQty(item.id)}
                                                className="btn btn-outline-secondary btn-sm"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 mb-3 mb-md-0 text-md-end">
                                        <button onClick={() => removeFromCart(item.id)} className="btn btn-outline-danger btn-sm">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {cart.length > 0 && (
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

                            <div className="d-flex justify-content-between mb-4">
                                <h5>Total:</h5>
                                <h5 className="text-danger">₱{total.toFixed(2)}</h5>
                            </div>

                            <Link to="/checkout" className="btn accent-bg text-white btn-lg w-100">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart;