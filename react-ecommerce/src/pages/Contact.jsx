const Contact = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-5 text-center">Get In Touch</h1>

            <div className="row">
                {/* Contact Form */}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow-sm p-4">
                        <h3 className="mb-4">Send Us a Message</h3>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="+63 XXX XXX XXXX"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <select className="form-select">
                                    <option>General Inquiry</option>
                                    <option>Order Status</option>
                                    <option>Product Question</option>
                                    <option>Return/Exchange</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-dark w-100">
                                <i className="fas fa-paper-plane me-2"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="col-lg-6">
                    <div className="card shadow-sm p-4 mb-4">
                        <h3 className="mb-4">Contact Information</h3>

                        <div className="mb-4">
                            <h5><i className="fas fa-map-marker-alt me-2 text-danger"></i>Store Location</h5>
                            <p className="ms-4">123 Fashion Street, Makati City<br />Metro Manila, Philippines 1200</p>
                        </div>

                        <div className="mb-4">
                            <h5><i className="fas fa-phone me-2 text-danger"></i>Phone</h5>
                            <p className="ms-4">+63 2 1234 5678<br />+63 917 123 4567</p>
                        </div>

                        <div className="mb-4">
                            <h5><i className="fas fa-envelope me-2 text-danger"></i>Email</h5>
                            <p className="ms-4">support@adidas.com.ph<br />sales@adidas.com.ph</p>
                        </div>

                        <div className="mb-4">
                            <h5><i className="fas fa-clock me-2 text-danger"></i>Business Hours</h5>
                            <p className="ms-4">
                                Monday - Friday: 9:00 AM - 8:00 PM<br />
                                Saturday: 10:00 AM - 7:00 PM<br />
                                Sunday: 11:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="card shadow-sm p-4">
                        <h3 className="mb-3">Follow Us</h3>
                        <div className="d-flex gap-3">
                            <a href="#" className="btn btn-outline-dark btn-lg">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="btn btn-outline-dark btn-lg">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="btn btn-outline-dark btn-lg">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="btn btn-outline-dark btn-lg">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
