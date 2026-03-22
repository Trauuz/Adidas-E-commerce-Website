import { createContext, useState, useCallback } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();

const MAX_RECENT = 6;
const MAX_COMPARE = 4;

const ProductProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceRange, setPriceRange] = useState({ min: "", max: "" });
    const [sortBy, setSortBy] = useState("");

    // Recently viewed — stored in state (persists per session)
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    // Compare list
    const [compareList, setCompareList] = useState([]);

    const trackView = useCallback((product) => {
        setRecentlyViewed(prev => {
            const filtered = prev.filter(p => p.id !== product.id);
            return [product, ...filtered].slice(0, MAX_RECENT);
        });
    }, []);

    const toggleCompare = useCallback((product) => {
        setCompareList(prev => {
            const exists = prev.find(p => p.id === product.id);
            if (exists) return prev.filter(p => p.id !== product.id);
            if (prev.length >= MAX_COMPARE) return prev; // cap at 4
            return [...prev, product];
        });
    }, []);

    const isInCompare = useCallback((id) => {
        return compareList.some(p => p.id === id);
    }, [compareList]);

    const clearCompare = () => setCompareList([]);

    return (
        <ProductContext.Provider value={{
            searchQuery, setSearchQuery,
            selectedCategory, setSelectedCategory,
            priceRange, setPriceRange,
            sortBy, setSortBy,
            recentlyViewed, trackView,
            compareList, toggleCompare, isInCompare, clearCompare,
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
