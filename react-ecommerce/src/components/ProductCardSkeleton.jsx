const ProductCardSkeleton = () => (
    <div className="card h-100 shadow-sm">
        <div className="skeleton skeleton-img"></div>
        <div className="card-body">
            <div className="skeleton skeleton-line w-50 mb-2"></div>
            <div className="skeleton skeleton-line w-75 mb-2"></div>
            <div className="skeleton skeleton-line w-100 mb-2"></div>
            <div className="skeleton skeleton-line w-100 mb-3"></div>
            <div className="skeleton skeleton-btn"></div>
        </div>
    </div>
);

export default ProductCardSkeleton;
