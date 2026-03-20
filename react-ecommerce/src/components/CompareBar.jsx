import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const FIELDS = [
    { label: "Price", render: p => `₱${p.price.toLocaleString()}` },
    { label: "Original", render: p => `₱${p.oldPrice?.toLocaleString()}` },
    { label: "Discount", render: p => `${p.discount}%` },
    { label: "Category", render: p => p.category },
    { label: "Rating", render: p => "★".repeat(p.rating) + "☆".repeat(5 - p.rating) },
];

const CompareBar = () => {
    const { compareList, toggleCompare, clearCompare } = useContext(ProductContext);
    const [showModal, setShowModal] = useState(false);

    if (compareList.length === 0) return null;

    return (
        <>
            {/* Sticky bar */}
            <div className="compare-bar shadow-lg">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                    <span className="fw-bold me-2">
                        <i className="fas fa-balance-scale me-1"></i>
                        Compare ({compareList.length})
                    </span>

                    {compareList.map(p => (
                        <div key={p.id} className="compare-thumb d-flex align-items-center gap-1">
                            <img src={p.image} alt={p.name} width={40} height={40}
                                style={{ objectFit: 'cover', borderRadius: 4 }} />
                            <span className="small text-truncate" style={{ maxWidth: 100 }}>{p.name}</span>
                            <button
                                className="btn btn-sm btn-close ms-1"
                                onClick={() => toggleCompare(p)}
                                aria-label="Remove"
                            />
                        </div>
                    ))}

                    <div className="ms-auto d-flex gap-2">
                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={clearCompare}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-sm accent-bg text-white"
                            disabled={compareList.length < 2}
                            onClick={() => setShowModal(true)}
                        >
                            Compare Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-xl modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="fas fa-balance-scale me-2"></i>Product Comparison
                                </h5>
                                <button className="btn-close" onClick={() => setShowModal(false)} />
                            </div>
                            <div className="modal-body">
                                <table className="table table-bordered text-center align-middle">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '140px' }}>Feature</th>
                                            {compareList.map(p => (
                                                <th key={p.id}>
                                                    <img src={p.image} alt={p.name}
                                                        style={{ width: '100%', maxWidth: 120, height: 100, objectFit: 'cover', borderRadius: 6 }}
                                                        className="mb-2 d-block mx-auto"
                                                    />
                                                    <div className="small fw-semibold">{p.name}</div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {FIELDS.map(field => (
                                            <tr key={field.label}>
                                                <td className="fw-semibold text-start">{field.label}</td>
                                                {compareList.map(p => (
                                                    <td key={p.id}>{field.render(p)}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CompareBar;
