import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const Wishlist = () => {
    const { wishlist, toggleWishlist } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    if (wishlist.length === 0) {
        return (
            <div className="container text-center py-5">
                <i className="fas fa-heart fa-4x text-muted mb-4 d-block"></i>
                <h4 className="text-muted">Your wishlist is empty</h4>
                <p className="text-muted">Save items you love by clicking the heart icon on any product.</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="mb-4">My Wishlist <span className="text-muted fs-5">({wishlist.length} item{wishlist.length !== 1 ? 's' : ''})</span></h2>
            <div className="row">
                {wishlist.map(product => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                        <div className="card h-100 shadow-sm">
                            <div className="product-img-wrapper p-2">
                                <img src={product.image} className="card-img-top product-img" alt={product.name} />
                                {product.discount > 0 && (
                                    <span className="sale">-{product.discount}%</span>
                                )}
                            </div>

                            <div className="card-body d-flex gap-2 py-2">
                                <span className="fw-bold text-danger">₱{product.price.toLocaleString()}</span>
                                <span className="text-muted text-decoration-line-through small align-self-center">
                                    ₱{product.oldPrice?.toLocaleString()}
                                </span>
                            </div>

                            <div className="card-body d-flex flex-column py-2">
                                <h6 className="card-title">{product.name}</h6>
                                <div className="mb-2 text-warning">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`fa-star ${i < product.rating ? 'fas' : 'far'} fa`}></i>
                                    ))}
                                </div>
                                <span className="badge bg-secondary mb-3 align-self-start text-capitalize">
                                    {product.category}
                                </span>

                                <div className="d-flex gap-2 mt-auto">
                                    <button
                                        className="btn accent-bg text-white flex-grow-1"
                                        onClick={() => addToCart(product)}
                                    >
                                        <i className="fas fa-shopping-cart me-1"></i> Add to Cart
                                    </button>
                                    <button
                                        className="btn btn-outline-danger"
                                        title="Remove from wishlist"
                                        onClick={() => toggleWishlist(product)}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
