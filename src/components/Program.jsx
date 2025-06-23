import { useLocation, useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react"

export const Program = () => {
    const navigate = useNavigate()

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const images = ["gm_1.jpg", "gm_2.jpg", "gm_3.jpg"];
    const images2 = ["sy_1.png", "sy_2.png", "sy_3.png"]
    const images3 = ["slide7.webp", "slide8.webp", "slide9.webp"]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>SPARSH</title>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossOrigin="anonymous"
            />
            <link href="css/style.css" rel="stylesheet" />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n      /* ----------------Programs-part------------------- */\n.programs-head{margin:60px 0px 0px 0px;}\n.programs-head p{font-size:18px;color:#0C6051;line-height:1;font-weight: 600;margin-bottom: -5px;}\n.programs-head h2{font-size:48px;color:#333;line-height:1;font-family: 'open_sans_condensedbold';}\n.program-box{background-color:#286E5B;padding:80px 250px 80px 80px;}\n.program-box .program-box-text h4{font-size:18px;color:#fff;font-weight:500;width:87%;display: flex;margin: auto 0px;}\n.program-box-text .number-1 {background-color: #003E2D;font-weight: 400;margin-right: 10px;width:13%;height: 50px;position: relative;width:13%;}\n.program-box-text .number-1 p{font-size: 20px !important;color: #fff;position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);}\n.program-box .program-box-text p{font-size:16px;color:#fff;}\n.program-box1{background-color:#e1e1e1;padding:80px 80px 80px 250px;}\n.common_odd_ul li{color:#fff;}\n.common_even_ul li{color:#000;}\n.number-2{background-color: #F56A01;font-weight: 400;margin-right: 10px;width: 50px;height: 50px;position: relative;width:13%;}\n.number-2 p{font-size: 20px !important;color: #fff !important;position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);}\n/* .number-2{background-color:#F56A01;padding:5px 10px;font-weight:400;margin-right:10px;width:40px;height:40px;font-size:20px;color: #fff;} */\n.program-box1 .program-box-text h4{font-size:18px;color:#000;font-weight:500;width:87%;margin: auto 0px;}\n.program-box1 .program-box-text p{font-size:16px;color:#000;}\n.slider-row{margin-top:200px !important;}\n.slide-footer{background-color:#fbfbfb;}\n/* ----------program - slider------------ */\ninput[type=radio] {display: none;} \n.card,.card2,.card4,.card6{\n  position: absolute;\n  width:100%;\n  height: 80%;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transition: transform .4s ease;\n  cursor: pointer;\n}\n.card1,.card3,.card5 {\n  position: absolute;\n  width:100%;\n  height: 80%;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transition: transform .4s ease;\n  cursor: pointer;\n}\n.cards,.cards2,.cards4,.cards6 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  /* padding: 46px 0px 46px 0px; */\n  margin-left: -101px;\n  display: flex;\n  align-items: center;\n}\n\n.cards1,.cards3,.cards5 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  /* padding: 46px 0px 46px 0px; */\n  margin-left:101px;\n  display: flex;\n  align-items: center;\n}\n/* .cards1 {\n  margin-left:101px !important;\n} */\n.pr-carousel-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n#item-1:checked ~ .cards #song-3, #item-2:checked ~ .cards #song-1, #item-3:checked ~ .cards #song-2 {\n  transform: translatex(-20%) scale(.8);\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  z-index: 0;\n}\n#item-1:checked ~ .cards #song-2, #item-2:checked ~ .cards #song-3, #item-3:checked ~ .cards #song-1 {\n  transform: translatex(20%) scale(.8);\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  z-index: 0;\n}\n#item-1:checked ~ .cards #song-1, #item-2:checked ~ .cards #song-2, #item-3:checked ~ .cards #song-3 {\n  transform: translatex(0) scale(1);\n  opacity: 1;\n  z-index: 1;\n}\n/* --------slide-2-------- */\n#item-4:checked ~ .cards1 #song-6, #item-5:checked ~ .cards1 #song-4, #item-6:checked ~ .cards1 #song-5 {\n  transform: translatex(-20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-4:checked ~ .cards1 #song-5, #item-5:checked ~ .cards1 #song-6, #item-6:checked ~ .cards1 #song-4 {\n  transform: translatex(20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-4:checked ~ .cards1 #song-4, #item-5:checked ~ .cards1 #song-5, #item-6:checked ~ .cards1 #song-6 {\n  transform: translatex(0) scale(1)!important;\n  opacity: 1!important;\n  z-index: 1!important;\n}\n/* --------slide3-------- */\n#item-7:checked ~ .cards2 #song-9, #item-8:checked ~ .cards2 #song-7, #item-9:checked ~ .cards2 #song-8 {\n  transform: translatex(-20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-7:checked ~ .cards2 #song-8, #item-8:checked ~ .cards2 #song-9, #item-9:checked ~ .cards2 #song-7 {\n  transform: translatex(20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-7:checked ~ .cards2 #song-7, #item-8:checked ~ .cards2 #song-8, #item-9:checked ~ .cards2 #song-9 {\n  transform: translatex(0) scale(1)!important;\n  opacity: 1!important;\n  z-index: 1!important;\n}\n/* --------slide4-------- */\n#item-10:checked ~ .cards3 #song-12, #item-11:checked ~ .cards3 #song-10, #item-12:checked ~ .cards3 #song-11 {\n  transform: translatex(-20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-10:checked ~ .cards3 #song-11, #item-11:checked ~ .cards3 #song-12, #item-12:checked ~ .cards3 #song-10 {\n  transform: translatex(20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-10:checked ~ .cards3 #song-10, #item-11:checked ~ .cards3 #song-11, #item-12:checked ~ .cards3 #song-12 {\n  transform: translatex(0) scale(1)!important;\n  opacity: 1!important;\n  z-index: 1!important;\n}\n/* ------slide5----- */\n#item-13:checked ~ .cards4 #song-15, #item-14:checked ~ .cards4 #song-13, #item-15:checked ~ .cards4 #song-14 {\n  transform: translatex(-20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-13:checked ~ .cards4 #song-14, #item-14:checked ~ .cards4 #song-15, #item-15:checked ~ .cards4 #song-13 {\n  transform: translatex(20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-13:checked ~ .cards4 #song-13, #item-14:checked ~ .cards4 #song-14, #item-15:checked ~ .cards4 #song-15 {\n  transform: translatex(0) scale(1)!important;\n  opacity: 1!important;\n  z-index: 1!important;\n}\n/* ---------slide6-------- */\n#item-16:checked ~ .cards5 #song-18, #item-17:checked ~ .cards5 #song-16, #item-18:checked ~ .cards5 #song-17 {\n  transform: translatex(-20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-16:checked ~ .cards5 #song-17, #item-17:checked ~ .cards5 #song-18, #item-18:checked ~ .cards5 #song-16 {\n  transform: translatex(20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-16:checked ~ .cards5 #song-16, #item-17:checked ~ .cards5 #song-17, #item-18:checked ~ .cards5 #song-18 {\n  transform: translatex(0) scale(1)!important;\n  opacity: 1!important;\n  z-index: 1!important;\n}\n/* ---------slide7-------- */\n#item-19:checked ~ .cards6 #song-21, #item-20:checked ~ .cards6 #song-19, #item-21:checked ~ .cards6 #song-20 {\n  transform: translatex(-20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-19:checked ~ .cards6 #song-20, #item-20:checked ~ .cards6 #song-21, #item-21:checked ~ .cards6 #song-19 {\n  transform: translatex(20%) scale(.8)!important;\n  filter: blur(5px)!important;\n  -webkit-filter: blur(5px)!important;\n  z-index: 0!important;\n}\n#item-19:checked ~ .cards6 #song-19, #item-20:checked ~ .cards6 #song-20, #item-21:checked ~ .cards6 #song-21 {\n  transform: translatex(0) scale(1)!important;\n  opacity: 1!important;\n  z-index: 1!important;\n}\n/* -----------------Apply button------------------ */\n.apply-scholarship,.apply-scholarship:hover{\n  background-color: #F56A01;\n  color:#fff;\n  font-size: 16px;\n  font-weight:500;\n  width:150px;\n  margin-top:20px;\n}\n\n.apply-scholarship1,.apply-scholarship1:hover{\n  background-color:#286E5B;\n  color:#fff;\n  font-size: 16px;\n  font-weight:500;\n  width:150px;\n  margin-top:20px;\n}\n\n@media screen and (max-width:1280px){\n  .program-box1{padding:80px 80px 80px 170px;}\n  .program-box{padding:80px 170px 80px 80px;}\n}\n@media screen and (max-width:1024px){\n  .program-box1{padding:80px 80px 170px 80px;}\n  .program-box{padding:80px 80px 170px 80px;}\n  .cards, .cards2, .cards4 {margin-left:0px !important;margin-top:0px;}\n  .cards1, .cards3, .cards5 {margin-left:0px !important;margin-top:0px;}\n  .card, .card2, .card4 {width: 80%;height:45vh;}\n  .card1, .card3, .card5 {width: 80%;height:45vh;}\n  .place-order{order: 2;}\n  .slider-row{margin-top: 25% !important;}\n  .slide-footer{margin-top:18% !important;}\n}\n@media screen and (max-width:768px) {\n  .slider-row{margin-top: 28% !important;}\n}\n@media screen and (max-width:576px){\n  .program-box1{padding:40px 40px 100px 40px;}\n  .program-box{padding:40px 40px 100px 40px;}\n  .cards, .cards2, .cards4 {margin-left:0px !important;margin-top:0px;}\n  .cards1, .cards3, .cards5 {margin-left:0px !important;margin-top:0px;}\n  .card, .card2, .card4 {width: 80%;height:30vh;}\n  .card1, .card3, .card5 {width: 80%;height:30vh;}\n  .place-order{order: 2;}\n  .slider-row{margin-top: 45% !important;}\n  .slide-footer{margin-top:30% !important;}\n  .program-box-text h4 {font-size: 18px;}\n  .program-box-text p {font-size: 12px;}\n}\n@media screen and (max-width:390px){\n  .card, .card2, .card4 {width: 80%;height:25vh;}\n  .card1, .card3, .card5 {width: 80%;height:25vh;}\n  .slide-footer {margin-top: 20% !important;}\n}\n\nhr {margin: 0rem 0 1rem 0;}\n    "
                }}
            />
            <Header />
            <section>
                <div className="container p-0">
                    <div className="programs-head">
                        <p>FEATURE PROJECTS</p>
                        <h2>Programs</h2>
                    </div>
                    <div className="row"  id="Shubhvivaah">
                        <div
                            className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 program-box"
                        >
                            <h2 style={{marginTop:"-55px",color:"#F56A01"}}>Shubh Vivaah Sahayata Yojana</h2>
                            <div className="program-box-text">
                                <div className="d-flex mb-3">
                                    <div className="number-1">
                                        <p className="text-center">01</p>
                                    </div>
                                    <h4>Financial aid to the
                                        needy and poor persons for marriage of girls:</h4>
                                </div>
                                <ol className="common_odd_ul">
                                    <li>
                                        The Shubh Vivaah Sahayata Yojana provides financial assistance of ₹50,000–₹1,00,000 to
                                        economically disadvantaged families for their daughters&#39; weddings.
                                    </li>
                                    <li>
                                        Eligible beneficiaries
                                        must be Indian citizens, with an annual family income below ₹2,50,000.
                                    </li>
                                    <li>
                                        The aid is directly
                                        transferred to the bride’s or guardian’s bank account. Priority is given to orphans, differently-
                                        abled, and marginalized communities.
                                    </li>
                                    <li>
                                        Applicants must provide income proof, Aadhaar, and
                                        marriage-related documents.
                                    </li>
                                </ol>
                                <a
                                    className="btn apply-scholarship"
                                    onClick={() => navigate("/scholarship")}
                                    role="button"
                                >
                                    Apply
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 place-order">
                            <input type="radio" name="slider" id="item-1" defaultChecked="" />
                            <input type="radio" name="slider" id="item-2" />
                            <input type="radio" name="slider" id="item-3" />
                            <div className="cards">
                                <label className="card" htmlFor="item-1" id="song-1">
                                    <img
                                        src={`images/${images[currentIndex]}`}
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        {/* --slid-2-- */}
                        <div
                            className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 place-order"
                            id="Sahyogyojana"
                        >
                            <input type="radio" name="slider1" id="item-4" defaultChecked="" />
                            <input type="radio" name="slider1" id="item-5" />
                            <input type="radio" name="slider1" id="item-6" />
                            <div className="cards1">
                                <label className="card" htmlFor="item-4" id="song-4">
                                    <img
                                        src={`images/${images2[currentIndex]}`}
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 program-box1" style={{ backgroundColor: "#286E5B" }}>
                            <h2 style={{marginTop:"-55px",color:"#F56A01"}}>Sahyog Yojana</h2>
                            <div className="program-box-text">
                                <div className="d-flex mb-3 justify-content-end" style={{ color: "white" }}>
                                    <div className="number-2">
                                        <p>02</p>
                                    </div>
                                    <h4 style={{ color: "white" }}>Distribution of used clothes, books,
                                        computers, electronics, etc to the needy and poor children and
                                        persons</h4>
                                </div>
                                <ol className="common_even_ul">
                                    <li style={{ color: "white" }}>
                                        The Sahyog Yojana facilitates the collection and distribution of used clothes, books,
                                        computers, and electronics for distribution to underprivileged individuals.
                                    </li>
                                    <li style={{ color: "white" }}>
                                        Donations from
                                        individuals, organizations, and institutions are refurbished (if needed) and provided to needy
                                        students, families, and NGOs.
                                    </li>
                                    <li style={{ color: "white" }}>
                                        Collection centers and mobile vans ensure efficient
                                        distribution. Priority is given to rural and economically weaker sections.
                                    </li>
                                    <li style={{ color: "white" }}>
                                        This initiative
                                        promotes sustainability and social welfare.
                                    </li>
                                </ol>
                                <a
                                    className="btn apply-scholarship"
                                    onClick={() => navigate("/medical")}
                                    role="button"
                                >
                                    Apply
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        {/* --slid-3-- */}
                        <div
                            className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 program-box"
                            id="Jagritiyojan"
                        >
                            <h2 style={{marginTop:"-55px",color:"#F56A01"}}>Jagriti Yojana</h2>
                            <div className="program-box-text">
                                <div className="d-flex mb-3">
                                    <div className="number-1">
                                        <p>03</p>
                                    </div>
                                    <h4>
                                        Awareness workshops on hygiene,
                                        cleanliness, environment, child rights, women rights and human
                                        rights
                                    </h4>
                                </div>
                                <ol className="common_even_ul" >
                                    <li style={{ color: "white" }}>
                                        The Jagriti Yojana conducts free workshops on hygiene, cleanliness, environmental
                                        protection, child rights, women’s rights, and human rights.
                                    </li>
                                    <li style={{ color: "white" }}>
                                        Sessions are held in schools,
                                        communities, and rural areas, using interactive methods like street plays, expert talks, and
                                        digital resources.
                                    </li>
                                    <li style={{ color: "white" }}>
                                        The initiative targets students, women, and marginalized groups,
                                        promoting awareness and behavioral change.
                                    </li>
                                    <li style={{ color: "white" }}>
                                        NGOs, volunteers, and government bodies
                                        collaborate to ensure widespread impact.
                                    </li>
                                </ol>
                                <a
                                    className="btn apply-scholarship"
                                    onClick={() => navigate("/mrg")}
                                    role="button"
                                >
                                    Apply
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 place-order">
                            <input type="radio" name="slider2" id="item-7" defaultChecked="" />
                            <input type="radio" name="slider2" id="item-8" />
                            <input type="radio" name="slider2" id="item-9" />
                            <div className="cards2">
                                <label className="card2" htmlFor="item-7" id="song-7">
                                    <img
                                        src={`images/programs/${images3[currentIndex]}`}
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        {/* --slid-4-- */}
                        <div
                            className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 place-order"
                            id="Nyaysahayatayojana"
                        >
                            <input type="radio" name="slider3" id="item-10" defaultChecked="" />
                            <input type="radio" name="slider3" id="item-11" />
                            <input type="radio" name="slider3" id="item-12" />
                            <div className="cards3">
                                <label className="card3" htmlFor="item-10" id="song-10">
                                    <img
                                        src="images/la_1.png"
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                                <label className="card3" htmlFor="item-11" id="song-11">
                                    <img
                                        src="images/la_2.webp"
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                                <label className="card3" htmlFor="item-12" id="song-12">
                                    <img
                                        src="images/la_3.webp"
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 program-box1" style={{ backgroundColor: "#286E5B" }}>
                            <h2 style={{marginTop:"-55px",color:"#F56A01"}}>Nyay Sahayata Yojana</h2>
                            <div className="program-box-text">
                                <div className="d-flex mb-3">
                                    <div className="number-2" style={{ color: "white" }}>
                                        <p>04</p>
                                    </div>
                                    <h4 style={{ color: "white" }}>
                                        Free Legal advise to the needy,
                                        especially females
                                    </h4>
                                </div>
                                <ol className="common_even_ul" >
                                    <li style={{ color: "white" }}>
                                        The Nyay Sahayata Yojana offers free legal advice and assistance to underprivileged
                                        individuals, especially women, in India.
                                    </li>
                                    <li style={{ color: "white" }}>
                                        It provides guidance on domestic violence, property
                                        rights, divorce, and other legal matters. Priority is given to marginalized and vulnerable
                                        women.
                                    </li>
                                    <li style={{ color: "white" }}>
                                        Eligibility includes proof of income and the need for the free aid. The scheme
                                        ensures access to justice without financial burden.
                                    </li>
                                    <li style={{ color: "white" }}>
                                        Services will be made available through
                                        helplines, legal aid centers, and online consultations.
                                    </li>
                                </ol>
                                <a  className="btn apply-scholarship" href="#" role="button">Apply</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        {/* --slid-5-- */}
                        <div
                            className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 program-box"
                             id="Nyaysahayatayojana"
                        >
                            <h2 style={{marginTop:"-55px",color:"#F56A01"}} >Udaan Yojana</h2>
                            <div className="program-box-text">
                                <div className="d-flex mb-3">
                                    <div className="number-1">
                                        <p>05</p>
                                    </div>
                                    <h4>
                                        Free career counselling and mentoring to students
                                    </h4>
                                </div>
                                <ol>
                                    <li style={{ color: "white" }}>The Udaan Yojana provides free career counseling and mentorship to students from
                                        underprivileged backgrounds.</li>
                                    <li style={{ color: "white" }}>Expert mentors guide students in choosing the right career
                                        paths, preparing for exams, and developing skills.</li>
                                    <li style={{ color: "white" }}>
                                        The scheme offers online and offline
                                        counseling sessions, aptitude tests, and scholarship assistance. Priority is given to

                                        economically weaker students, especially girls.
                                    </li>
                                    <li style={{ color: "white" }}>Eligibility includes proof of financial need.
                                        The initiative empowers youth for a brighter future.</li>
                                </ol>
                                <a class="btn apply-scholarship" href="#" role="button">Apply</a> 
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 place-order">
                            <input type="radio" name="slider4" id="item-13" defaultChecked="" />
                            <input type="radio" name="slider4" id="item-14" />
                            <input type="radio" name="slider4" id="item-15" />
                            <div className="cards4">
                                <label className="card4" htmlFor="item-13" id="song-13">
                                    <img
                                        src="images/programs/slide13.webp"
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                                <label className="card4" htmlFor="item-14" id="song-14">
                                    <img
                                        src="images/programs/slide14.webp"
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                                <label className="card4" htmlFor="item-15" id="song-15">
                                    <img
                                        src="images/programs/slide15.webp"
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        {/* --slid-6-- */}
                        <div
                            className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12 place-order"
                            id="Udaanyojana"
                        >
                            <input type="radio" name="slider5" id="item-16" defaultChecked="" />
                            <input type="radio" name="slider5" id="item-17" />
                            <input type="radio" name="slider5" id="item-18" />
                            <div className="cards5">
                                <label className="card5" htmlFor="item-16" id="song-16">
                                    <img
                                        src="images/programs/slide16.webp"
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                                <label className="card5" htmlFor="item-17" id="song-17">
                                    <img
                                        src="images/programs/slide17.webp"
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                                <label className="card5" htmlFor="item-18" id="song-18">
                                    <img
                                        src="images/programs/slide18.webp"
                                        alt="song"
                                        className="pr-carousel-img"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
