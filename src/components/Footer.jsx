
const Footer = () => {
    return (
        <div style={{backgroundColor: "#EAFFF5"}}>
             <section id="footer-part">
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mx-auto">
                            <div className="logo-privacy">
                                <img
                                    src="images/logo.webp"
                                    className="img-fluid"
                                    width={80}
                                    height={80}
                                />
                                <p>
                                    Privacy policy to you how all this mistaken idea of denouncing
                                    pleasure and praising pain was born and I will a complete.
                                    account of the system, and expound the actual teachings of the
                                    great explorer of the truth, the master
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="quick-links">
                                        <h4>Quick Links</h4>
                                        <p>
                                            <a href="#">Donation</a>
                                        </p>
                                        <p>
                                            <a href="#">Volunteers</a>
                                        </p>
                                        <p>
                                            <a href="#">Projects</a>
                                        </p>
                                        <p>
                                            <a href="#">Fund raising events</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="resources">
                                        <h4>Resources</h4>
                                        <p>
                                            <a href="#">Blog</a>
                                        </p>
                                        <p>
                                            <a href="#">Home</a>
                                        </p>
                                        <p>
                                            <a href="#">Newsletter</a>
                                        </p>
                                        <p>
                                            <a href="#">Privacy Policy</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="subscribe">
                                <h4>Subscribe</h4>
                                <h6>
                                    Denouncing pleasure and praising pain was born and I will a
                                    complete.
                                </h6>
                                <form className="mt-4">
                                    <div className="d-flex">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Please enter your email Id"
                                        />
                                        <button type="submit" className="btn sub-button">
                                            <img src="images/sub.webp" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <hr className="mx-3" />
            <section id="brand">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="copy-right">
                                <p>
                                    Copyright © 2024 | SPARSH| All
                                    rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="brand text-end">
                                <p>
                                    Designed and Developed by{" "}
                                    <span>
                                        SPARSH TRUST
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer