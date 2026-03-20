import { useEffect, useState } from "react";

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("API Fetch Error:", error);
                setLoading(false);
            });
    }, []);

    return (
        <aside className="p-3 bg-light rounded">
            <h5 className="mb-3">Categories</h5>

            {loading && <p>Loading...</p>}

            <ul className="list-group">
                <li className="list-group-item active">
                    All Products
                </li>
                {categories.map((category, index) => (
                    <li key={index} className="list-group-item text-capitalize" style={{ cursor: 'pointer' }}>
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
