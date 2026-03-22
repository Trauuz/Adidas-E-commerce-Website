import { createContext, useState, useCallback } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceRange, setPriceRange] = useState({ min: "", max: "" });
    const [sortBy, setSortBy] = useState("");

    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = useCallback((product) => {
        setWishlist(prev => {
            const exists = prev.find(p => p.id === product.id);
            return exists ? prev.filter(p => p.id !== product.id) : [...prev, product];
        });
    }, []);

    const isInWishlist = useCallback((id) => {
        return wishlist.some(p => p.id === id);
    }, [wishlist]);

    return (
        <ProductContext.Provider value={{
            searchQuery, setSearchQuery,
            selectedCategory, setSelectedCategory,
            priceRange, setPriceRange,
            sortBy, setSortBy,
            wishlist, toggleWishlist, isInWishlist,
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
