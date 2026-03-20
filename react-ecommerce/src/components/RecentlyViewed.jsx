import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const RecentlyViewed = () => {
    const { recentlyViewed, toggleCompare, isInCompare } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    if (recentlyViewed.length === 0) return null;

    return (
        <div className="mt-5">
            <h5 className="fw-bold mb-3">
                <i className="fas fa-history me-2 text-secondary"></i>Recently Viewed
            </h5>
            <div className="d-flex gap-3 overflow-auto pb-2 recently-viewed-strip">
                {recentlyViewed.map(product => (
                    <div key={product.id} className="card shadow-sm flex-shrink-0" style={{ width: 160 }}>
                        <div style={{ height: 120, overflow: 'hidden' }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="card-body p-2">
                            <p className="small mb-1 text-truncate" title={product.name}>{product.name}</p>
                            <p className="fw-bold text-danger small mb-2">₱{product.price.toLocaleString()}</p>
                            <div className="d-flex gap-1">
                                <button
                                    className="btn btn-sm accent-bg text-white flex-grow-1"
                                    onClick={() => addToCart(product)}
                                >
                                    <i className="fas fa-cart-plus"></i>
                                </button>
                                <button
                                    className={`btn btn-sm ${isInCompare(product.id) ? 'btn-success' : 'btn-outline-secondary'}`}
                                    onClick={() => toggleCompare(product)}
                                    title="Compare"
                                >
                                    <i className="fas fa-balance-scale"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;
