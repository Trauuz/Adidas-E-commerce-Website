import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const SORT_OPTIONS = [
    { value: "", label: "Default" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name", label: "Name (A–Z)" },
    { value: "rating", label: "Top Rated" },
];

const Sidebar = () => {
    const {
        searchQuery, setSearchQuery,
        selectedCategory, setSelectedCategory,
        priceRange, setPriceRange,
        sortBy, setSortBy,
    } = useContext(ProductContext);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://adidas-e-commerce-website.onrender.com")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Categories fetch error:", err));
    }, []);

    const clearAll = () => {
        setSearchQuery("");
        setSelectedCategory("All");
        setPriceRange({ min: "", max: "" });
        setSortBy("");
    };

    const hasFilters = searchQuery || selectedCategory !== "All" ||
        priceRange.min !== "" || priceRange.max !== "" || sortBy;

    return (
        <aside className="p-3 bg-light rounded">

            {/* Search */}
            <h6 className="fw-bold mb-2">Search</h6>
            <div className="input-group input-group-sm mb-4">
                <span className="input-group-text"><i className="fas fa-search"></i></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                    <button className="btn btn-outline-secondary" onClick={() => setSearchQuery("")}>
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>

            {/* Sort */}
            <h6 className="fw-bold mb-2">Sort By</h6>
            <select
                className="form-select form-select-sm mb-4"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
            >
                {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>

            {/* Categories */}
            <h6 className="fw-bold mb-2">Category</h6>
            <ul className="list-group mb-4">
                <li
                    className={`list-group-item list-group-item-action ${selectedCategory === "All" ? "active" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedCategory("All")}
                >
                    All Products
                </li>
                {categories.map((cat, i) => (
                    <li
                        key={i}
                        className={`list-group-item list-group-item-action text-capitalize ${selectedCategory === cat ? "active" : ""}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </li>
                ))}
            </ul>

            {/* Price Range */}
            <h6 className="fw-bold mb-2">Price Range (₱)</h6>
            <div className="d-flex gap-2 align-items-center mb-2">
                <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Min"
                    value={priceRange.min}
                    min={0}
                    onChange={e => setPriceRange(p => ({ ...p, min: e.target.value }))}
                />
                <span>–</span>
                <input
                    type="number"
                    className="form-control form-control-sm"
                    placeholder="Max"
                    value={priceRange.max}
                    min={0}
                    onChange={e => setPriceRange(p => ({ ...p, max: e.target.value }))}
                />
            </div>

            {/* Clear all */}
            {hasFilters && (
                <button className="btn btn-sm btn-outline-danger w-100 mt-2" onClick={clearAll}>
                    <i className="fas fa-filter me-1"></i> Clear Filters
                </button>
            )}
        </aside>
    );
};

export default Sidebar;
