import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="card h-100 shadow-sm">
            {/* Image wrapper for zoom and badge */}
            <div className="product-img-wrapper p-2">
                <img
                    src={product.image}
                    className="card-img-top product-img"
                    alt={product.name}
                />
            </div>

            {/* Price section */}
            <div className="card-body d-flex gap-2 py-2">
                <span className="fw-bold text-danger">
                    ₱{product.price}
                </span>
            </div>

            {/* Discount Section */}
            <div className="card-body d-flex align-items-center gap-2 py-1">
                <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                    ₱{product.oldPrice} Original Price
                </span>
                <span className="text-danger small fw-semibold">
                    -{product.discount}%
                </span>
            </div>


            <div className="card-body d-flex flex-column py-2">
                <h6 className="card-title">{product.name}</h6>

                {/* Star rating */}
                <div className="mb-2 text-warning">
                    {[...Array(5)].map((star, index) => (
                        <i key={index} className={`fa-star ${index < product.rating ? 'fas' : 'far'} fa`}></i>
                    ))}
                </div>

                <button className="btn accent-bg text-white mt-auto mb-4" onClick={() => addToCart(product)}>
                    <i className="fas fa-shopping-cart me-2 text-white"></i>
                    Add to Cart
                </button>

            </div>
        </div>
    );
};

export default ProductCard;