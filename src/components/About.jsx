import Footer from "./Footer";
import AboutModal from "./AboutModal";
export const About = () => {


    return (
        <>
            <AboutModal />
            <section id="about-members">
                <div className="container">
                    <div className="heading">
                        <p>Our Team members</p>
                    </div>
                    <div className="container" id="topmembers">
                        <div className="row">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1 mb-sm-5">
                                <div className="member1 text-center">
                                    <img
                                        src="images/khajuria.jpg"
                                        className="image1"
                                        alt={1}
                                    />
                                    <p id="name1">Dr Rajendra Prasad Khajuria</p>
                                    <p id="ceo">Indian Forest Service (IFS)</p>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1 mb-sm-5">
                                <div className="member1 text-center">
                                    <img
                                        src="images/laghima2.jpg"
                                        className="image1"
                                        alt={1}
                                    />
                                    <p id="name1">MS Laghima Khajuria</p>
                                    <p id="ceo">Chairperson of SPARSH Trust</p>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1 mb-sm-5">
                                <div className="member1 text-center">
                                    <img
                                        src="images/laghima.jpg"
                                        className="image1"
                                        alt={1}
                                    />
                                    <p id="name1">NEERU MISHRA</p>
                                    <p id="ceo">(Advocate, High Court of Andhra Pradesh at Amaravati)</p>

                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1 mb-sm-5">
                                <div className="member1 text-center">
                                    <img
                                        img
                                        src="images/profile-img/profile-img1.webp"
                                        className="image1"
                                        alt={1}
                                    />
                                    <p id="name1"> Dr Lakkaraju Jaysree</p>
                                    <p id="ceo">Academician</p>
                                </div>
                            </div>
                            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1 mb-sm-5">
                                <div className="member2 text-center">
                                    <img
                                        src="images/about/team/5.webp"
                                        className="image1"
                                        alt={1}
                                    />
                                    <p id="name2"> K.R.Karimlal</p>
                                    <p id="ceo2">Organizer</p>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1 mb-sm-5">
                                <div className="member2 text-center">
                                    <img
                                        src="images/about/team/6.webp"
                                        className="image1"
                                        alt={1}
                                    />
                                    <p id="name1">B.Anuragh</p>
                                    <p id="ceo2">Supporting Staff</p>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1 mb-sm-5">
                                <div className="member2 text-center">
                                    <img
                                        src="images/about/team/7.webp"
                                        className="image1"
                                        alt={1}
                                    />
                                    <p id="name2">S.V.Sudharsan</p>
                                    <p id="ceo2">Supporting Staff</p>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-1 mb-sm-5">
                                <div className="member2 text-center">
                                    <img
                                        src="images/about/team/8.webp"
                                        className="image1"
                                        alt={1}
                                    />
                                    <p id="name2"> K.Laxman Rao</p>
                                    <p id="ceo2">Supporting Staff</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-0">
                    <div className="about-partner">
                        <div className="container">
                            <h2>My Partners and Collaborators</h2>
                            <p className="pr-text">
                                It's important to note that effective collaboration requires
                                ongoing effort, communication, and a commitment to shared goals.
                                Whether in business, academia, or other fields, strong
                                partnerships contribute significantly to achieving meaningful
                                outcomes.
                            </p>
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3 mt-md-0 pr-box">
                                    <div className="pr-box1">
                                        <p>
                                            <b>Innovation:</b> <br />
                                            Collaborators can bring fresh perspectives and ideas to the
                                            table, fostering innovation. Diverse input from partners can
                                            lead to creative solutions and improved problem-solving.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12  mt-3 mt-md-0 pr-box">
                                    <div className="pr-box1">
                                        <p>
                                            <b>Expanded Networks:</b>
                                            <br /> Collaborators can bring fresh perspectives and ideas
                                            to the table, fostering innovation. Diverse input from
                                            partners can lead to creative solutions and improved
                                            problem-solving.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12  mt-3 mt-md-0 pr-box">
                                    <div className="pr-box1">
                                        <p>
                                            <b>Mutual Support:</b>
                                            <br /> Strong partnerships involve mutual support during
                                            challenges. Collaborators can offer assistance and share
                                            insights to overcome obstacles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------- */}
                {/* <div className="container-fluid p-0">
                <div className="marquee-wrapper">
                    <div className="marquee-container">
                        <div className="marquee-list">
                            <div className="image-slider d-flex">
                                <img src="images/about/lg.webp" />
                                <img src="images/about/Google.webp" />
                                <img src="images/about/pepsi.webp" />
                                <img src="images/about/KFC.webp" />
                                <img src="images/about/Dominos.webp" />
                                <img src="images/about/Apollo.webp" />
                                <img src="images/about/Tata.webp" />
                            </div>
                            <div className="image-slider d-flex">
                                <img src="images/about/lg.webp" />
                                <img src="images/about/Google.webp" />
                                <img src="images/about/pepsi.webp" />
                                <img src="images/about/KFC.webp" />
                                <img src="images/about/Dominos.webp" />
                                <img src="images/about/Apollo.webp" />
                                <img src="images/about/Tata.webp" />
                            </div>
                            <div className="image-slider d-flex">
                                <img src="images/about/lg.webp" />
                                <img src="images/about/Google.webp" />
                                <img src="images/about/pepsi.webp" />
                                <img src="images/about/KFC.webp" />
                                <img src="images/about/Dominos.webp" />
                                <img src="images/about/Apollo.webp" />
                                <img src="images/about/Tata.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </section>
            <Footer />
        </>
    )
}
