import Footer from "./Footer";
import Header from "./Header";

export const Contact = () => (
    <>
        <Header />
        <section id="contact-part">
            <div className="container">
                <div className="row contact-row">
                    <div className="contact-head">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-box">
                            <div className="con-img-text d-flex">
                                <img src="images/location.webp" width={40} height={40} alt="no data"/>
                                <div className="location">
                                    <h6>OUR OFFICE</h6>
                                    <p>Venkat Enclave, Labbipet,Vijayawada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-box mt-4 mt-md-0">
                            <div className="con-img-text d-flex">
                                <img src="images/phone.webp" width={40} height={40} alt="no data"/>
                                <div className="location">
                                    <h6>PHONE NUMBER</h6>
                                    <p>+91 9490934108</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-box mt-4 mt-lg-0">
                            <div className="con-img-text d-flex">
                                <img src="images/mail.webp" width={40} height={40} alt="no data"/>
                                <div className="location">
                                    <h6>E-MAIL</h6>
                                    <p>sparsh@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-box mt-4 mt-lg-0">
                            <div className="con-img-text d-flex">
                                <img src="images/fax.webp" width={40} height={40} alt="no data"/>
                                <div className="location">
                                    <h6>FAX</h6>
                                    <p>1-265-56231656</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-info">
                            <h2>Contact information</h2>
                            <h6>Reg Office :</h6>
                            <p>
                                #40-5-1B, SF-8, Venkat Enclave, Revenue Ward-13, Tikkil Road,
                                <br /> Labbipet, Vijayawada -520 010, NTR District,
                                <br /> Andhra Pradesh, India.
                            </p>
                            <h6>Branch Office :</h6>
                            <p>H. No. 74/2A, Trikuta Nagar, Jammu, 180012, J&amp;K.</p>
                            <img src="images/contact-img.webp" className="img-fluid" alt="no data"/>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="contact-form">
                            <form>
                                <div className="form-name">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter your mail address"
                                    />
                                </div>
                                <div className="form-name">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="floatingInputValue"><b>Message</b></label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        placeholder="Enter your message"
                                        defaultValue={""}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12867.256231767284!2d80.64357424842672!3d16.50295151267124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fab0c62a5075%3A0x8e83e1ee910964e5!2sVenkat%20Enclave!5e0!3m2!1sen!2sin!4v1707801910470!5m2!1sen!2sin"
                                style={{
                                    border: 0,
                                    width: "100%",
                                    height: 350,
                                    paddingTop: 50
                                }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr className="mx-3" />
        <Footer />
    </>
)
