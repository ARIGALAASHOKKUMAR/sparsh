import Footer from "./Footer";
import Header from "./Header";
import "../css/style.css"

export const Scholarship = () => {

    return (

        <>
            <Header />
            <section id="banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-xs-12 col-sm-12 scholar-bg">
                            <div className="scholar">
                                <div className="scholar-main">
                                    <div className="scholar-heading">
                                        <p> WE ARE HELPING DESERVED PEOPLE</p>
                                    </div>
                                    <p className="scholar-sub">
                                        Scholarship Scheme
                                        <br />
                                        for <i>Meritorious</i> students
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-xs-12 col-sm-12 mt-5">
                            <div className="scholar-image text-center">
                                <img
                                    className="bg-img img-fluid banner-man"
                                    src="images/scl-bg.png"
                                    alt="man-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------------banner part ends---------------------- */}
            {/* -------------------------Personal Details---------------------- */}
            <section id="personal-details">
                <div className="container border my-3">
                    <div className="row d-flex">
                        <div className="scholar-heading-form1">
                            <h4 className="details mt-5">
                                Personal <span>Details</span>
                            </h4>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12 col-xs-12 mt-3">
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your full name"
                                />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-xl-2 col-xxl-2 col-sm-12 col-xs-12 mt-3">
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Age
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Age"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 mt-3 mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Class
                            </label>
                            <select className="form-select" id="floatingSelectGrid">
                                <option selected="">Please Select Class...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12 col-xs-12 mb-sm-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Address"
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xl-3 col-xxl-3 col-sm-12 col-xs-12">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xl-3 col-xxl-3 col-sm-12 col-xs-12">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Phone Number
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Phone number"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="scholar-heading-form2">
                            <h4 className="details mt-5">
                                Performance <span>and Exams</span>
                            </h4>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 mt-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Academic Qualification{" "}
                            </label>
                            <select className="form-select" id="floatingSelectGrid">
                                <option selected="">Please Select Qualification..</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 mt-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Marks
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Marks % or GPA"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 mt-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Year
                            </label>
                            <select className="form-select" id="floatingSelectGrid">
                                <option selected="">Please Select Passed Year...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                        <div className="col-lg-8 col-md-8 col-xl-8 col-xxl-8 col-sm-12 col-xs-12 mt-2">
                            <div>
                                <label htmlFor="formFileLg" className="form-label">
                                    Upload Proofs
                                </label>
                                <input
                                    className="form-control scholar-form-input form-control scholar-form-input-lg"
                                    id="formFileLg"
                                    type="file"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="scholar-heading-form3">
                            <h4 className="details mt-5">
                                Bank <span>Details</span>
                            </h4>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 mt-3">
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Account Holder Name
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Full Name"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 mt-3">
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Name of Bank
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Full Bank"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 mt-3">
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Account Number
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Account Number"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 mt-3">
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    IFSC Code
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your IFSC Code"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 mt-3">
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Branch Name
                                </label>
                                <input
                                    type="email"
                                    className="form-control scholar-form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Branch Name"
                                />
                            </div>
                        </div>
                        <div className="submit text-center my-5">
                            <button className="btn submit-button btn-primary" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
