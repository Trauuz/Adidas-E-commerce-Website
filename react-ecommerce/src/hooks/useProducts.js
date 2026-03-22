import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const useProducts = () => {
    const { searchQuery, selectedCategory, priceRange, sortBy } = useContext(ProductContext);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/products`)
            .then(res => res.json())
            .then(data => { setAllProducts(data); setLoading(false); })
            .catch(err => { console.error("Fetch error:", err); setLoading(false); });
    }, []);

    let filtered = [...allProducts];

    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
        );
    }

    if (selectedCategory && selectedCategory !== "All") {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (priceRange.min !== "") filtered = filtered.filter(p => p.price >= Number(priceRange.min));
    if (priceRange.max !== "") filtered = filtered.filter(p => p.price <= Number(priceRange.max));

    switch (sortBy) {
        case "price-asc":  filtered.sort((a, b) => a.price - b.price); break;
        case "price-desc": filtered.sort((a, b) => b.price - a.price); break;
        case "name":       filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
        case "rating":     filtered.sort((a, b) => b.rating - a.rating); break;
        default: break;
    }

    return { products: filtered, loading };
};

export default useProducts;
