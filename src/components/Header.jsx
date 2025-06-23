import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../images/logo.webp";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div style={{ marginBottom: "100px" }}>
            <section style={{ position: "fixed", width: "100%", top: 0, zIndex: 1000, backgroundColor: "#EAFFF5" }} className="d-flex justify-content-between align-items-center">
                <div>
                    <a className="navbar-brand" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                        <img src={logo} className="img-fluid" alt="Logo" style={{ width: "40%", height: "40%" }} />
                    </a>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "transparent" }}>
                        <button
                            className="navbar-toggler border-0 align-self-end"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ cursor: "pointer" }}>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-bold" onClick={() => navigate("/")}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-bold" onClick={() => navigate("/About")}>About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-dark fw-bold"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Programs
                                    </a>
                                    <ul className="dropdown-menu border-0 shadow">
                                        <li><a className="dropdown-item" onClick={() => navigate("/program#Shubhvivaah")}>Shubh Vivaah Sahayata Yojana</a></li>
                                        <li><a className="dropdown-item" onClick={() => navigate("/program#Sahyogyojana")}>Sahyog Yojana</a></li>
                                        <li><a className="dropdown-item" onClick={() => navigate("/program#Jagritiyojan")}>Jagriti Yojana</a></li>
                                        <li><a className="dropdown-item" onClick={() => navigate("/program#Nyaysahayatayojana")}>Nyay Sahayata Yojana</a></li>
                                        <li><a className="dropdown-item" onClick={() => navigate("/program#Udaanyojana")}>Udaan Yojana</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-bold" onClick={() => navigate("/donation")}>Donation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-bold" onClick={() => navigate("/blog")}>Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-bold" onClick={() => navigate("/gallery")}>Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fw-bold" onClick={() => navigate("/contact")}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Header;
