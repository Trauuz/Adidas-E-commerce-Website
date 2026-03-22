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

            {/* Call to Action */}
            <div className="row">
                <div className="col-12 text-center">
                    <div className="card bg-dark text-white p-5">
                        <h2 className="mb-3">Join the Adidas Family</h2>
                        <p className="mb-4">Sign up for adiClub and unlock exclusive benefits, early access to new releases, and special offers.</p>
                        <div>
                            <button className="btn btn-light btn-lg">
                                <i className="fas fa-user-plus me-2"></i>
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
