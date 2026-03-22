import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import Sidebar from "../components/Sidebar";
import useProducts from "../hooks/useProducts";

const SKELETON_COUNT = 8;

const ProductList = () => {
    const { products, loading } = useProducts();

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-3 mb-4">
                    <Sidebar />
                </div>

                <div className="col-lg-10 col-md-9">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h2 className="mb-0">All Products</h2>
                        {!loading && (
                            <span className="text-muted small">
                                {products.length} result{products.length !== 1 ? "s" : ""}
                            </span>
                        )}
                    </div>

                    {loading ? (
                        <div className="row">
                            {[...Array(SKELETON_COUNT)].map((_, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
                                    <ProductCardSkeleton />
                                </div>
                            ))}
                        </div>
                    ) : products.length === 0 ? (
                        <div className="text-center py-5 text-muted">
                            <i className="fas fa-search fa-3x mb-3 d-block"></i>
                            No products match your filters.
                        </div>
                    ) : (
                        <div className="row">
                            {products.map(product => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4 fade-in" key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
