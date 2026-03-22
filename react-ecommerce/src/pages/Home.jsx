import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import Carousel from "../components/Carousel";

const Home = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/products`)
            .then((res) => res.json())
            .then((data) => { setProduct(data); setLoading(false); })
            .catch((error) => { console.error("API Fetch Error: ", error); setLoading(false); });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Carousel
                        banners={[
                            "/images/banner.webp",
                            "/images/banner2.jpg",
                            "/images/banner3.jpg",
                            "/images/banner4.png"
                        ]}
                    />
                </div>
            </div>

            <h2 className="mx-3 my-4">END OF SEASON <span className="text-danger">SALE</span></h2>
            <div className="row">
                {loading
                    ? [...Array(4)].map((_, i) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
                            <ProductCardSkeleton />
                        </div>
                    ))
                    : products.slice(0, 4).map((product, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                            <ProductCard product={product} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
