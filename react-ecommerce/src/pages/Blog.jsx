import { Link } from 'react-router-dom';
const Blog = () => {
    return (

        <div className="container">
            <div className="row my-3">
                <div className="col-md-10">
                    <h1 className="mb-3">Latest Release</h1>
                    <div className="row my-4">
                        <h3 className="mb-3">Adidas Chinese New Year Jacket: Tradition Meets Streetwear Style</h3>
                        <img src="/src/assets/images/blog1.jpg" className="img-fluid rounded-start w-100 h-20 mb-2" alt="..." />
                        <h5>
                            <p className="mt-2">The Adidas Chinese New Year (CNY) Jacket is more than just a seasonal
                                release—it’s a celebration of culture, luck, and modern streetwear. Designed to honor the
                                Chinese New Year, this jacket blends traditional symbolism with Adidas’ signature sporty
                                aesthetic,
                                making it a standout piece for both collectors and everyday wear.</p>
                        </h5>

                        <h5>
                            <p>The jacket features premium materials that offer comfort and warmth, perfect for cool weather
                                fits.
                                Subtle yet meaningful details—such as festive color palettes, embroidered accents, and
                                CNY-inspired
                                patterns—reflect themes of prosperity, renewal, and good fortune. Adidas keeps the design
                                balanced,
                                so while it carries cultural elements, it still feels versatile enough to style casually.
                            </p>
                        </h5>

                        <h5>
                            <p>From a styling perspective, the CNY Adidas Jacket works best with neutral pants, classNameic
                                sneakers, or even
                                monochrome outfits to let the jacket shine as the statement piece. Whether you’re going for
                                a
                                laid-back street look or a clean, modern fit, this jacket easily elevates your outfit.</p>
                        </h5>

                        <h5>
                            <p>Overall, the Adidas CNY Jacket is a perfect example of how fashion can respect tradition
                                while staying relevant
                                in today’s streetwear scene. Limited, meaningful, and stylish—this piece is definitely worth
                                adding to your wardrobe
                                if you want something that stands out beyond the usual drops.</p>
                        </h5>

                    </div>

                    <h2 className="mb-3">More </h2>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="/src/assets/images/blog2.jpg" className="img-fluid rounded-start w-100 h-100" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Oversized Essential T-Shirt</h5>
                                    <p className="card-text">A clean, oversized tee made for daily wear. Soft fabric, relaxed
                                        fit, and easy to style with any outfit—from street to casual. ...</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small>
                                    </p>
                                    <button className="btn btn-primary mt-4">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Blog;

