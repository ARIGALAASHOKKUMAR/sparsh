import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Header from "./Header";
import { LaghimaKhajuria } from "./LaghimaKhajuria";
import { Rajendra } from "./Rajendra";
import { Lakkaraju } from "./Lakkaraju";
import { NeeruMishra } from "./NeeruMishra";

const AboutModal = () => {
  const [modal, setModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleShow = (component) => {
    setSelectedComponent(component);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    setSelectedComponent(null);
  };
  return (
    <div>
      <Modal
        show={modal}
        onHide={handleClose}
        size="lg"
        dialogClassName="modal90vw"
      >
        <Modal.Header
          className="theme_bg"
          style={{ backgroundColor: "#EAFFF5" }}
        >
          <Modal.Title
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            SPARSH
          </Modal.Title>
          <i
            className="fa fa-times"
            onClick={handleClose}
            style={{
              cursor: "pointer",
              marginRight: "8px",
              fontSize: "15px",
            }}
          ></i>
        </Modal.Header>
        <Modal.Body className="bgModal">{selectedComponent}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            <i className="fa fa-close"></i> Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <section id="about-part">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
              <div className="about-para">
                <h5>ABOUT US</h5>
                <h2>SPARSH Trust</h2>
                <p style={{ cursor: "pointer" }}>
                  SPARSH was registered as a Public and Charitable Trust on
                  13.01.2023, at Vijayawada, Andhra Pradesh, INDIA with a
                  Chairman and three (3) Trustees viz.{" "}
                  <a
                    onClick={() => handleShow(<LaghimaKhajuria />)}
                    className="main-people"
                  >
                    Ms. Laghima Khajuria,
                  </a>{" "}
                  as the Chairman and
                  <a
                    onClick={() => handleShow(<Rajendra />)}
                    className="main-people"
                  >
                    {" "}
                    Dr. Rajendra Prasad Khajuria, IFS,
                  </a>{" "}
                  and{" "}
                  <a
                    onClick={() => handleShow(<Lakkaraju />)}
                    className="main-people"
                  >
                    Ms. Lakkaraju Jayasree
                  </a>
                  , and{" "}
                  <a
                    onClick={() => handleShow(<NeeruMishra />)}
                    className="main-people"
                  >
                    Ms. Neeru Mishra
                  </a>{" "}
                  as Trustees.
                </p>
                <p>
                  The other objects of the trust: To help the poorest of the
                  poor and other disadvantaged sections of society for their
                  education and health. To assist, collaborate, promote, provide
                  opportunities, and organize healthcare, education, recreation,
                  and training programs to eradicate poverty, achieve widespread
                  primary education, promote gender equality, reduce child
                  mortality, improve maternal health, and combat HIV/AIDS.
                </p>
              </div>
            </div>
            <br/>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 my-auto p-0">
              <div className="about-sliders m-auto">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="images/gallery/a.jpg"
                        className="d-block w-100 d-lg-none d-block"
                        alt="SPARSH"
                      />
                      <img
                        src="images/gallery/b.jpg"
                        className="d-block w-100 d-none d-lg-block"
                        alt="SPARSH"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/gallery/d.jpg"
                        className="d-block w-100 d-lg-none d-block"
                        alt="SPARSH"
                      />
                      <img
                        src="images/gallery/d.jpg"
                        className="d-block w-100 d-none d-lg-block"
                        alt="SPARSH"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/gallery/e.jpg"
                        className="d-block w-100 d-lg-none d-block"
                        alt="SPARSH"
                      />
                      <img
                        src="images/gallery/f.jpg"
                        className="d-block w-100 d-none d-lg-block"
                        alt="SPARSH"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="about-tabs">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item text-center" role="presentation">
                <button
                  className="nav-link active vision"
                  id="vision-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#vision"
                  type="button"
                  role="tab"
                  aria-controls="vision"
                  aria-selected="true"
                >
                  <img
                    src="images/about/vision.svg"
                    className="d-block mx-auto"
                    alt="SPARSH"
                  />
                  Vision
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link mission"
                  id="mission-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#mission"
                  type="button"
                  role="tab"
                  aria-controls="mission"
                  aria-selected="false"
                >
                  <img
                    src="images/about/mission.svg"
                    className="d-block mx-auto"
                    alt="SPARSH"
                  />
                  Mission
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link objective"
                  id="objective-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#objective"
                  type="button"
                  role="tab"
                  aria-controls="objective"
                  aria-selected="false"
                >
                  <img
                    src="images/about/objective.svg"
                    className="d-block mx-auto"
                    alt="SPARSH"
                  />
                  Objective
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="vision"
                role="tabpanel"
                aria-labelledby="vision-tab"
              >
                <div className="container">
                  <div className="about-tab-vision">
                    <h3>Vision</h3>
                    <p>
                      The Vision of SPARSH shall be to ensure that all living
                      beings get the opportunity to prosper, realise their full
                      potential, have peace of mind and are free form agonies.
                      The Trust will be an agency for human resource
                      development, promotion of education, creation of awareness
                      on health care issues especially for children and women,
                      environmental conservation, empowerment of socially and
                      economically deprived sections of the society through
                      gender equality and awareness of human rights and poverty
                      alleviation, thereby making earth a better place to live.
                      Trust shall also provide research and consultancy in the
                      above-mentioned areas as well as any other field that
                      helps to improve the overall quality of life for the
                      inhabitants, leading to better development of the region.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="mission"
                role="tabpanel"
                aria-labelledby="mission-tab"
              >
                <div className="container">
                  <div className="about-tab-mission">
                    <h3>MISSION</h3>
                    <h6>
                      The Trust shall imbibe the ethos expressed in the
                      following shloka from Brhidaranyak Upanishad viz :
                    </h6>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-6">
                        <p>
                          <small>
                            “ॐ&nbsp;सर्वे&nbsp;भवन्तु&nbsp;सुखिनः
                            <br />
                            सर्वे&nbsp;सन्तु&nbsp;निरामयाः&nbsp;।
                            <br />
                            सर्वे&nbsp;भद्राणि&nbsp;पश्यन्तु
                            <br />
                            मा&nbsp;कश्चिद्दुःखभाग्भवेत्&nbsp;।
                            <br />
                            ॐ&nbsp;शान्तिः&nbsp;शान्तिः&nbsp;शान्तिः&nbsp;॥
                          </small>
                        </p>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-6">
                        <p>
                          <b>
                            "Om Sarve Bhavantu{" "}
                            <span>Sukhina Sarve santu niramaya </span>
                            <br />
                            Sarve bhadrani pashyantu <br />
                            Ma kashchit dukh bhagbhavet
                            <br />
                            <span className="text-danger">
                              Aum Shanti Aum Shanti Aum Shanti
                            </span>{" "}
                            "
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="objective"
                role="tabpanel"
                aria-labelledby="objective-tab"
              >
                <div className="container">
                  <div className="about-tab-object">
                    <div className="row" />
                    <h3>Objective</h3>
                    <h6>The other objects of the trust follow:</h6>
                    <div className="row px-3">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-auto">
                        <p>
                          <span>a)</span> ) To help the poorest and other
                          disadvantaged sections of society with their
                          education, health, hunger, access to drinking water,
                          and securing their rights, especially for children,
                          women, and senior citizens in both rural and urban
                          areas.
                        </p>
                        <p>
                          <span>b)</span> Work towards the conservation and
                          protection of forests, the environment, and natural
                          water resources.
                        </p>
                        <p>
                          <span>c)</span> To promote care for animals and birds, work for their conservation, and protect their habitats
                        </p>
                        <p>
                          <span>d)</span> To motivate citizens to fulfil their Fundamental Duties as enshrined in Article 51 A of the Indian Constitution
                        </p>
                        <p>
                          <span>e)</span> To communicate and co-ordinate with government local and public authorities on various issues related to development welfare and public interest on different subjects.
                        </p>
                        <p>
                          <span>f)</span> To give grant / financial support to such organizations which seek to contribute towards achieving the objects of the trust.
                        </p>
                        <p>
                          <span>g)</span> To organize yoga and meditation camps, nature walks, and other activities for the public to promote good health and mental wellbeing.
                        </p>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-auto">
                        <p>
                          <span>h)</span>To support the youth in achieving excellence in the arts, humanities, sports, science, technology, and innovation.
                        </p>
                        <p>
                          <span>i)</span> To conduct national and international seminars, workshops, training camps and awareness campaigns for the above objectives.
                        </p>
                        <p>
                          <span>j)</span> To undertake such other activities and to create such other structures, institutions and organizations as may be found essential or conducive for the better realization of the above-mentioned objectives.
                        </p>
                        <p>
                          <span>k)</span> To provide research and consultancy in the areas of health, education, and the environment, as well as any other field that can improve the quality of life and lead to sustainable development.
                        </p>
                        <p>
                          <span>l)</span> To establish office/branch of the trust to run the activities in any part of India or any other country, both in rural and urban areas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutModal;
