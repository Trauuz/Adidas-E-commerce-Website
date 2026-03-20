const About = () => {
    return (
        <div className='container py-5'>
            {/* Hero Section */}
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 fw-bold mb-3">About Adidas</h1>
                    <p className="lead text-muted">Impossible is Nothing</p>
                </div>
            </div>

            {/* Our Story */}
            <div className="row mb-5">
                <div className="col-lg-8 mx-auto">
                    <h2 className="mb-4">Our Story</h2>
                    <p className="mb-3">
                        Founded in 1949 by Adolf "Adi" Dassler, Adidas has grown from a small German shoe company
                        to one of the world's leading sports brands. Our mission is to be the best sports brand in the world,
                        and we're committed to constantly innovating to help athletes perform at their best.
                    </p>
                    <p className="mb-3">
                        We believe that through sport, we have the power to change lives. Whether you're a professional
                        athlete or just starting your fitness journey, Adidas provides the gear and inspiration you need
                        to achieve your goals.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div className="row mb-5">
                <div className="col-12">
                    <h2 className="text-center mb-5">Our Core Values</h2>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm text-center p-4">
                        <div className="mb-3">
                            <i className="fas fa-trophy fa-3x text-danger"></i>
                        </div>
                        <h4>Performance</h4>
                        <p>We strive for excellence in everything we do, constantly pushing boundaries to deliver the best products for athletes.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm text-center p-4">
                        <div className="mb-3">
                            <i className="fas fa-heart fa-3x text-danger"></i>
                        </div>
                        <h4>Passion</h4>
                        <p>Our love for sports drives us to create innovative products that inspire and empower athletes worldwide.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm text-center p-4">
                        <div className="mb-3">
                            <i className="fas fa-users fa-3x text-danger"></i>
                        </div>
                        <h4>Integrity</h4>
                        <p>We conduct business with honesty and transparency, building trust with our customers and partners.</p>
                    </div>
                </div>
            </div>

            {/* Sustainability */}
            <div className="row mb-5">
                <div className="col-lg-8 mx-auto">
                    <h2 className="mb-4">Sustainability Commitment</h2>
                    <p className="mb-3">
                        At Adidas, we're committed to creating a better future for our planet. We're working to end plastic
                        waste, reduce our carbon footprint, and use sustainable materials in our products.
                    </p>
                    <ul>
                        <li>By 2024, 9 out of 10 Adidas products will be made with sustainable materials</li>
                        <li>We've already created over 30 million pairs of shoes using ocean plastic</li>
                        <li>Our goal is to achieve climate neutrality by 2050</li>
                    </ul>
                </div>
            </div>

            {/* Statistics */}
            <div className="row text-center mb-5">
                <div className="col-md-3 mb-4">
                    <div className="card shadow-sm p-4">
                        <h2 className="display-4 fw-bold text-danger">70+</h2>
                        <p className="text-muted">Years of Innovation</p>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card shadow-sm p-4">
                        <h2 className="display-4 fw-bold text-danger">160+</h2>
                        <p className="text-muted">Countries Worldwide</p>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card shadow-sm p-4">
                        <h2 className="display-4 fw-bold text-danger">60K+</h2>
                        <p className="text-muted">Employees</p>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card shadow-sm p-4">
                        <h2 className="display-4 fw-bold text-danger">1M+</h2>
                        <p className="text-muted">Products Sold Daily</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="row">
                <div className="col-12 text-center">
                    <div className="card bg-dark text-white p-5">
                        <h2 className="mb-3">Join the Adidas Family</h2>
                        <p className="mb-4">Sign up for adiClub and unlock exclusive benefits, early access to new releases, and special offers.</p>
                        <button className="btn btn-light btn-lg">
                            <i className="fas fa-user-plus me-2"></i>
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
