import { useNavigate } from "react-router-dom"
import { Form, Field, ErrorMessage, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import "../css/style.css"
import Header from "./Header";
import Footer from "./Footer";
import AboutModal from "./AboutModal";
import { FormGroup } from "react-bootstrap";
import { commonAPICall, myAxios, VolunteerRegister } from "../utils/utils";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Overlay from "./Overlay";
import { useState } from "react";

export const Home = () => {

    const validationSchema = Yup.object({
        firstName: Yup.string().required("required"),
        lastName: Yup.string().required("required"),
        gender: Yup.string().required("required"),
        mobileNumber: Yup.string()
            .matches(/^\d{10}$/, "Mobile number must be 10 digits")
            .required("required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        dateOfBirth: Yup.date().required("required"),
        aadhaarNumber: Yup.string()
            .matches(/^\d{12}$/, "Aadhaar number must be 12 digits")
            .required("required"),
        password: Yup.string().required("required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        qualification: Yup.string().required("required"),
        experience: Yup.string().required("required"),
        reason: Yup.string().required("Please provide a reason for volunteering"),
    });



    const [loading, setLoading] = useState(false)



    const Submitdata = async (values, { resetForm }) => {
        setLoading(true)
        try {
            const response = await myAxios.post(VolunteerRegister, values);
            if (response.status === 200) {
                toast.success("Registration successful!", { position: "top-right" });
                resetForm();
            }
        } catch (error) {
            if (error.response.status === 409) {
                toast.error(error.response.data.message);
            }
            else {
                toast.error.response("Error submitting data!", { position: "top-right" });
            }
        }
        setLoading(false)
    };



    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            gender: "",
            mobileNumber: "",
            email: "",
            dateOfBirth: "",
            aadhaarNumber: "",
            password: "",
            confirmPassword: "",
            qualification: "",
            experience: "",
            reason: "",
        },
        validationSchema,
        onSubmit: Submitdata
    });
    return (
        <>
            <Header />
            <Overlay loading={loading}/>
            <section id="banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-auto p-0">
                            <div className="banner-text">
                                <h2>
                                    Sarvjan Prakamya Aivam
                                    <br /> Ridhi Sidhi Hetu (SPARSH) Trust
                                </h2>
                                <p className="slokam">
                                    "Om Sarve Bhavantu Sukhina Sarve santu niramaya <br />Sarve bhadrani
                                    pashyantu<br /> Ma kashchit dukh bhagbhavet <br />
                                    <span className="text-danger">Aum Shanti Aum Shanti Aum Shanti</span>"
                                </p>
                                <button type="button" className="btn donate-button btn-warning">
                                    Donate Now
                                </button>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="banner-img text-end">
                                <img
                                    src="images/banner-image.webp"
                                    className="img-fluid"
                                    alt=""
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutModal />
            <section id="volunteer">
                <div className="container-fluid bg-white">
                    <div className="volunteer-head">
                        <h2>Volunteer Opportunities</h2>
                    </div>
                    <div className="row px-5">
                        <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12  ">
                            <div className="volunteer-img">
                                <img
                                    src="images/1.jpeg"
                                    className="img-fluid img-thumbnail  d-block"
                                    style={{ margin: "0 auto" }}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 regist">
                            <div className="volunteer-form px-0">
                                <h4>
                                    Registration For Volunteer
                                    <small>(All fields are mandatory)</small>
                                </h4>
                                <FormikProvider value={formik}>
                                    <Form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                                        <div className="d-block d-md-flex">
                                            <div className="mb-2 w-100 pe-0 pe-md-4">
                                                <label className="form-label">First Name</label>
                                                <Field type="text" className="form-control" name="firstName" />
                                                <ErrorMessage name="firstName" component="div" className="text-danger" />
                                            </div>
                                            <div className="mb-2 w-100 pe-0 pe-md-4">
                                                <label className="form-label">Last Name</label>
                                                <Field type="text" className="form-control" name="lastName" />
                                                <ErrorMessage name="lastName" component="div" className="text-danger" />
                                            </div>
                                            <div className="mb-2 w-100">
                                                <FormGroup className="form-group">
                                                    <label className="form-label">Gender</label>
                                                    <div className="form-control w-100 nb-1 br8 d-flex align-items-center gap-3">
                                                        <label className="d-flex align-items-center gap-1">
                                                            <Field type='radio' name='gender' value="male" />
                                                            Male
                                                        </label>
                                                        <label className="d-flex align-items-center gap-1">
                                                            <Field type='radio' name='gender' value="female" />
                                                            Female
                                                        </label>
                                                    </div>
                                                    <ErrorMessage name="gender" component="div" className="text-danger" />
                                                </FormGroup>
                                            </div>
                                        </div>
                                        <div className="d-block d-md-flex">
                                            <div className="mb-2 w-100 pe-0 pe-md-4">
                                                <label className="form-label">Mobile Number</label>
                                                <Field type="text" className="form-control" name="mobileNumber" maxLength="10" />
                                                <ErrorMessage name="mobileNumber" component="div" className="text-danger" />
                                            </div>

                                            <div className="mb-2 w-100 pe-0 pe-md-4">
                                                <label className="form-label">Email ID</label>
                                                <Field type="email" className="form-control" name="email" />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>

                                            <div className="mb-2 w-100">
                                                <label className="form-label">Date of Birth</label>
                                                <Field type="date" className="form-control" name="dateOfBirth" />
                                                <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="d-block d-md-flex">
                                            <div className="mb-2 w-100 pe-0 pe-md-4">
                                                <label className="form-label">Aadhaar Number</label>
                                                <Field type="text" className="form-control" name="aadhaarNumber" maxLength="12" />
                                                <ErrorMessage name="aadhaarNumber" component="div" className="text-danger" />
                                            </div>

                                            <div className="mb-2 w-100 pe-0 pe-md-4">
                                                <label className="form-label">Password</label>
                                                <Field type="password" className="form-control" name="password" />
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>

                                            <div className="mb-2 w-100">
                                                <label className="form-label">Confirm Password</label>
                                                <Field type="password" className="form-control" name="confirmPassword" />
                                                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="w-100">
                                            <div className="note mt-3 w-100">
                                                <h4 className="fs-5 fw-bold d-inline-block">
                                                    About Yourself{" "}
                                                    <span
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="right"
                                                        title="Please fill the Qualification, Experience and Why you want to Volunteer"
                                                    >
                                                        (Help)
                                                    </span>
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="d-block d-md-flex">
                                            <div className="mb-2 w-100 pe-0 pe-md-4">
                                                <label className="form-label">Qualification</label>
                                                <Field type="text" className="form-control" name="qualification" />
                                                <ErrorMessage name="qualification" component="div" className="text-danger" />
                                            </div>

                                            <div className="mb-2 w-100 pe-0 pe-md-4">
                                                <label className="form-label">Experience in NGO Sector</label>
                                                <Field type="text" className="form-control" name="experience" />
                                                <ErrorMessage name="experience" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="d-block d-md-flex">
                                            <div className="mb-2 w-100 pe-0 pe-md-4">
                                                <label className="form-label">Why you want to Volunteer</label>
                                                <Field as="textarea" className="form-control form-cn-1 rounded-0" name="reason" rows={1} />
                                                <ErrorMessage name="reason" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="mb-2 d-flex justify-content-end align-items-center">
                                            <button type="submit" className="btn mt-4 btn-primary pull-right">
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                </FormikProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section>
                <div className="container">
                    <div className="row fund-row">
                        <div className="fund-head">
                            <h2>Fundraising Events</h2>
                            <p>
                                These events are designed to engage participants in activities
                                that not only entertain but also inspire them to contribute
                                towards a common goal. Fundraiser events can take various forms,
                                including charity auctions, benefit concerts, walkathons, or
                                online crowdfunding campaigns{" "}
                            </p>
                        </div>
                        <div id="carouselExampleControls" className="carousel fund-slider">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card fund-card">
                                        <div className="img-wrapper">
                                            <img
                                                src="images/gallery/a.jpg"
                                                alt="..."
                                                className="fund-img"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                We conducted Dance performance in Mumbai.
                                            </p>
                                            <div className="bar" />
                                            <div className="d-flex">
                                                <div className="raised">
                                                    <p>Raised</p>
                                                    <h5>₹6,000</h5>
                                                </div>
                                                <div className="goal ms-auto">
                                                    <p>Goal</p>
                                                    <h5>₹10,000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card fund-card">
                                        <div className="img-wrapper">
                                            <img
                                                src="images/gallery/c.jpg"
                                                alt="..."
                                                className="fund-img"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                We are conducted Food Distribution in Nirmal.
                                            </p>
                                            <div className="bar bar2" />
                                            <div className="d-flex">
                                                <div className="raised">
                                                    <p>Raised</p>
                                                    <h5>₹6,000</h5>
                                                </div>
                                                <div className="goal ms-auto">
                                                    <p>Goal</p>
                                                    <h5>₹10,000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card fund-card">
                                        <div className="img-wrapper">
                                            <img
                                                src="images/gallery/d.jpg"
                                                alt="..."
                                                className="fund-img"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                We are conducted medical camp in Orissa
                                            </p>
                                            <div className="bar bar3" />
                                            <div className="d-flex">
                                                <div className="raised">
                                                    <p>Raised</p>
                                                    <h5>₹6,000</h5>
                                                </div>
                                                <div className="goal ms-auto">
                                                    <p>Goal</p>
                                                    <h5>₹10,000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card fund-card">
                                        <div className="img-wrapper">
                                            <img
                                                src="images/gallery/e.jpg"
                                                alt="..."
                                                className="fund-img"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                We conducted Dance performance in Munbai.
                                            </p>
                                            <div className="bar" />
                                            <div className="d-flex">
                                                <div className="raised">
                                                    <p>Raised</p>
                                                    <h5>₹6,000</h5>
                                                </div>
                                                <div className="goal ms-auto">
                                                    <p>Goal</p>
                                                    <h5>₹10,000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card fund-card">
                                        <div className="img-wrapper">
                                            <img
                                                 src="images/gallery/f.jpg"
                                                alt="..."
                                                className="fund-img"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                We conducted Dance performance in Munbai.
                                            </p>
                                            <div className="bar" />
                                            <div className="d-flex">
                                                <div className="raised">
                                                    <p>Raised</p>
                                                    <h5>₹6,000</h5>
                                                </div>
                                                <div className="goal ms-auto">
                                                    <p>Goal</p>
                                                    <h5>₹10,000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card fund-card">
                                        <div className="img-wrapper">
                                            <img
                                               src="images/gallery/g.jpg"
                                                alt="..."
                                                className="fund-img"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                We conducted Dance performance in Munbai.
                                            </p>
                                            <div className="bar" />
                                            <div className="d-flex">
                                                <div className="raised">
                                                    <p>Raised</p>
                                                    <h5>₹6,000</h5>
                                                </div>
                                                <div className="goal ms-auto">
                                                    <p>Goal</p>
                                                    <h5>₹10,000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card fund-card">
                                        <div className="img-wrapper">
                                            <img
                                                src="images/gallery/h.jpg"
                                                alt="..."
                                                className="fund-img"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                We conducted Dance performance in Munbai.
                                            </p>
                                            <div className="bar" />
                                            <div className="d-flex">
                                                <div className="raised">
                                                    <p>Raised</p>
                                                    <h5>₹6,000</h5>
                                                </div>
                                                <div className="goal ms-auto">
                                                    <p>Goal</p>
                                                    <h5>₹10,000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card fund-card">
                                        <div className="img-wrapper">
                                            <img
                                                src="images/gallery/e.jpg"
                                                alt="..."
                                                className="fund-img"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                We conducted Dance performance in Munbai.
                                            </p>
                                            <div className="bar" />
                                            <div className="d-flex">
                                                <div className="raised">
                                                    <p>Raised</p>
                                                    <h5>₹6,000</h5>
                                                </div>
                                                <div className="goal ms-auto">
                                                    <p>Goal</p>
                                                    <h5>₹10,000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card fund-card">
                                        <div className="img-wrapper">
                                            <img
                                                src="images/gallery/f.jpg"
                                                alt="..."
                                                className="fund-img"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                We conducted Dance performance in Munbai.
                                            </p>
                                            <div className="bar" />
                                            <div className="d-flex">
                                                <div className="raised">
                                                    <p>Raised</p>
                                                    <h5>₹6,000</h5>
                                                </div>
                                                <div className="goal ms-auto">
                                                    <p>Goal</p>
                                                    <h5>₹10,000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev pre-icon-1"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon pre-icon-2"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next next-icon-1"
                                type="button"
                                data-bs-target="#carouselExampleControls"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon next-icon-2"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="feature-part">
                <div className="container">
                    <div className="row feature-row">
                        <div className="feature-head">
                            <p>PROGRAM HIGHLIGHTS</p>
                            <h2>Featured Projects</h2>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-0">
                            <div className="feature-img">
                                <img
                                    src="images/gallery/a.jpg"
                                    className="img-fluid w-100 feature-img-main"
                                    alt=""
                                />
                                <div className="feature-icon w-100 text-center">
                                    <img src="images/f-1.webp" className="img-fluid" alt="" />
                                    <h4>SCHOLARSHIP</h4>
                                    <p className="icon-text">
                                        Scholarship Scheme for meritorious children.
                                    </p>
                                    <button type="button" className="btn explore-button">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-0">
                            <div className="feature-img">
                                <img
                                    src="images/gallery/b.jpg"
                                    className="img-fluid w-100 feature-img-main"
                                    alt=""
                                />
                                <div className="feature-icon w-100 text-center">
                                    <img src="images/f-2.webp" className="img-fluid" alt="" />
                                    <h4>ENVIRONMENT</h4>
                                    <p className="icon-text">
                                        Awareness workshops on hygiene, cleanliness, environment,
                                        child rights, women rights and human rights.
                                    </p>
                                    <button type="button" className="btn explore-button">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-0">
                            <div className="feature-img">
                                <img
                                    src="images/gallery/c.jpg"
                                    className="img-fluid w-100 feature-img-main"
                                    alt=""
                                />
                                <div className="feature-icon w-100 text-center">
                                    <img src="images/f-3.webp" className="img-fluid" alt="" />
                                    <h4>EDUCATION</h4>
                                    <p className="icon-text">
                                        Distribution of used clothes, books, computers, etc to the
                                        needy children.
                                    </p>
                                    <button type="button" className="btn explore-button">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-0">
                            <div className="feature-img">
                                <img
                                   src="images/5.jpeg"
                                    className="img-fluid w-100 feature-img-main"
                                    alt=""
                                />
                                <div className="feature-icon w-100 text-center">
                                    <img src="images/f-4.webp" className="img-fluid" alt="" />
                                    <h4>DISABLED</h4>
                                    <p className="icon-text">
                                        Distribution of used wheelchairs,Medicines,etc to the needy
                                        Disabled peoples
                                    </p>
                                    <button type="button" className="btn explore-button">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-0">
                            <div className="feature-img">
                                <img
                                   src="images/4.jpeg"
                                    className="img-fluid w-100 feature-img-main"
                                    alt=""
                                />
                                <div className="feature-icon w-100 text-center">
                                    <img src="images/f-5.webp" className="img-fluid" alt="" />
                                    <h4>WOMEN</h4>
                                    <p className="icon-text">
                                        Free Legal advise to the needy especially females.
                                    </p>
                                    <button type="button" className="btn explore-button">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-0">
                            <div className="feature-img">
                                <img
                                   src="images/1.jpeg"
                                    className="img-fluid w-100 feature-img-main"
                                    alt=""
                                />
                                <div className="feature-icon w-100 text-center">
                                    <img src="images/f-6.webp" className="img-fluid" alt="" />
                                    <h4>MEDICAL</h4>
                                    <p className="icon-text">
                                        Financial aid to the needy persons for health, medicines,
                                        marriage of girl child etc.
                                    </p>
                                    <button type="button" className="btn explore-button">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="donation-part">
                <div className="container">
                    <div className="row donation-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="donation-text">
                                <h3>Make a Donation</h3>
                                <div className="star-text d-flex">
                                    <span>*</span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor.
                                    </p>
                                </div>
                                <div className="star-text d-flex">
                                    <span>*</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="star-text d-flex">
                                    <span>*</span>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                                </div>
                                <button type="button" className="btn btn-warning mx-auto">
                                    Make Donation
                                </button>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="donation-subscribe">
                                <h4>Newsletter Subscription</h4>
                                <form className="mt-4">
                                    <div className="d-flex">
                                        <input
                                            type="email"
                                            className="form-control subscribe-form-in"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Please enter your email Id"
                                        />
                                        <button type="submit" className="btn d-sub-button">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------Contact-------- */}
            <section id="contact-part">
                <div className="container">
                    <div className="row contact-row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="contact-box">
                                <div className="con-img-text d-flex">
                                    <img src="images/location.webp" width={40} height={40} alt="" />
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
                                    <img src="images/phone.webp" width={40} height={40} alt="" />
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
                                    <img src="images/mail.webp" width={40} height={40} alt="" />
                                    <div className="location">
                                        <h6>EMAIL</h6>
                                        <p>sparsh@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="contact-box mt-4 mt-lg-0">
                                <div className="con-img-text d-flex">
                                    <img src="images/fax.webp" width={40} height={40} alt="" />
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
                                <img src="images/contact-img.webp" className="img-fluid" alt="" />
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
                                    <button type="submit" className="btn contct-sub btn-primary">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="mx-3" />
            <Footer />
        </>
    )
}
