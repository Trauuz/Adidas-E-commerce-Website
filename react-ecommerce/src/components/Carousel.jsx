const Carousel = ({ banners }) => {
    return (
        <div className="container">
            <div
                id="carouselExampleIndicators"
                className="carousel slide custom-carousel"
                data-bs-ride="carousel"
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : undefined}
                        />
                    ))}
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    {banners.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <img
                                src={image}
                                className="d-block w-100"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" />
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
