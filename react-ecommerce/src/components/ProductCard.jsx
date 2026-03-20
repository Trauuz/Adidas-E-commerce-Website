import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { toggleCompare, isInCompare, trackView } = useContext(ProductContext);

    const inCompare = isInCompare(product.id);

    return (
        <div
            className={`card h-100 shadow-sm product-card ${inCompare ? 'compare-selected' : ''}`}
            onClick={() => trackView(product)}
        >
            {/* Image */}
            <div className="product-img-wrapper p-2">
                <img src={product.image} className="card-img-top product-img" alt={product.name} />
                {product.discount > 0 && (
                    <span className="sale">-{product.discount}%</span>
                )}
            </div>

            {/* Price */}
            <div className="card-body d-flex gap-2 py-2">
                <span className="fw-bold text-danger">₱{product.price.toLocaleString()}</span>
            </div>

            {/* Original price */}
            <div className="card-body d-flex align-items-center gap-2 py-1">
                <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                    ₱{product.oldPrice?.toLocaleString()} Original Price
                </span>
            </div>

            <div className="card-body d-flex flex-column py-2">
                <h6 className="card-title">{product.name}</h6>

                {/* Stars */}
                <div className="mb-2 text-warning">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-star ${i < product.rating ? 'fas' : 'far'} fa`}></i>
                    ))}
                </div>

                {/* Category badge */}
                <span className="badge bg-secondary mb-2 align-self-start text-capitalize">
                    {product.category}
                </span>

                <div className="d-flex gap-2 mt-auto mb-2">
                    <button
                        className="btn accent-bg text-white flex-grow-1"
                        onClick={e => { e.stopPropagation(); addToCart(product); }}
                    >
                        <i className="fas fa-shopping-cart me-1"></i> Add to Cart
                    </button>
                    <button
                        className={`btn ${inCompare ? 'btn-success' : 'btn-outline-secondary'}`}
                        title={inCompare ? 'Remove from compare' : 'Add to compare'}
                        onClick={e => { e.stopPropagation(); toggleCompare(product); }}
                    >
                        <i className="fas fa-balance-scale"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
