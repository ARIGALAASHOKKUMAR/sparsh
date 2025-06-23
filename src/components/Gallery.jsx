import Footer from "./Footer";
import Header from "./Header";
import React, { useEffect, useState } from "react";

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
        "1.jpeg", "3.jpeg", "9.jpeg", "12.jpeg", "14.jpeg",
        // "about-image-1.webp", "about-image-2.webp", "about-image-3.webp",
        // "about-image-4.webp", "about-image-5.webp", "about-image-6.webp",
        // "about-image-7.webp", "about-image-8.webp", "about-image-9.webp",
        "a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg",
    ];

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };


    useEffect(() => {
        const handleKeyPress = (event) => {
            if (selectedImage !== null) {
                if (event.key === "ArrowRight") {
                    setSelectedImage((prev) => (prev + 1) % images.length);
                } else if (event.key === "ArrowLeft") {
                    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
                } else if (event.key === "Escape") {
                    setSelectedImage(null);
                }
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [selectedImage, images.length]);

    return (
        <>
            <Header />
            <div className="container">
                <h3 className="gallerytitle mb-0">Gallery</h3>
                <h2 className="photostitle">Photos</h2>
                <div className="row m-0">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 leftside-text">
                        <div className="gallery-head-text">
                            <h2>“ It is a long established fact that a reader will be distracted.”</h2>
                            <p className="pt-3">
                                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 px-0">
                        <img
                            src="images/10.jpeg"
                            alt=""
                            className="img-fluid w-100"
                        />
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="gallery-section">
                    <div className="container px-0">
                        <div className="row mt-4">
                            {images.map((image, index) => (
                                <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 p-1">
                                    <div className="box big">
                                        <a onClick={() => setSelectedImage(index)} data-fancybox="gallery1">
                                            <img
                                                src={`images/${image}`}
                                                className="img-fluid"
                                                style={{ width: "350px", height: "350px", objectFit: "cover" }}
                                                alt="Gallery"
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {selectedImage !== null && (
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.8)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: "9999",
                            }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="btn btn-warning"
                                onClick={handlePrev}
                                style={{
                                    position: "absolute",
                                    left: "10%",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                }}
                            >
                                &#10094; Prev
                            </button>
                            <img
                                src={`images/${images[selectedImage]}`}
                                style={{
                                    maxWidth: "70%",
                                    maxHeight: "70%",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                }}
                                alt="Selected"
                            />
                            <button
                                className="btn btn-warning"
                                onClick={handleNext}
                                style={{
                                    position: "absolute",
                                    right: "10%",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                }}
                            >
                                Next &#10095;
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Video Section */}
            {/* <section id="video-gallery">
                <div className="container">
                    <div className="row">
                        <div className="video-head">
                            <h2>Videos</h2>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 video-text p-0">
                            <div className="video-head1">
                                <p>
                                    Drishti Foundation Trust has been at the forefront of impactful initiatives.
                                </p>
                                <p>
                                    Our expertise extends to collaborating with corporates in India.
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 p-0">
                            <div id="carouselExample" className="carousel slide video-slider">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <video width="100%" height="100%" controls>
                                            <source src="images/video/movie1.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="carousel-item">
                                        <video width="100%" controls>
                                            <source src="images/video/movie2.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon fund-prev" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon fund-next" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
        </>
    );
};
