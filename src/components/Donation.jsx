import Footer from "./Footer";
import Header from "./Header";

export const Donation = () => (
    <>
        <Header />
        <section id="donation-amount">
            <div className="container p-0">
                <div className="donation-text1 mt-4">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries.
                    </p>
                    <div className="pan-text">
                        <p className="mb-0">
                            PAN Number of SPARSH TRUST is <span>XXXXXXXXX652R</span>
                        </p>
                    </div>
                    <div className="get-box-text">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries.
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English.
                        </p>
                    </div>
                </div>
                <div className="get-form mt-4">
                    <div className="form-title">
                        <h5>
                            SPARSH TRUST Donation Form<span>(Personal Details)</span>
                        </h5>
                    </div>
                    <div className="p-4">
                        <div className="form-alert">
                            <p>
                                Note:In case of any error during transaction,please wait for 72
                                hours before initiating a new transaction.
                            </p>
                        </div>
                        <div className="row form-row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex">
                                <div className="mb-4 get-select me-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Title
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option selected="">Mr.</option>
                                        <option value={1}>Mrs.</option>
                                        <option value={2}>Ms.</option>
                                        <option value={3}>M/s.</option>
                                    </select>
                                </div>
                                <div className="mb-4 get-select1">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        First Name<sup className="star-color">*</sup>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-con-1"
                                        id="exampleFormControlInput1"
                                    />
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-con-1"
                                        id="exampleFormControlInput1"
                                    />
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Email<sup className="star-color">*</sup>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-con-1"
                                        id="exampleFormControlInput1"
                                    />
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Phone Number<sup className="star-color">*</sup>
                                        <span className="country-code">
                                            (Country Code is Not Mandatory)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-con-1"
                                        id="exampleFormControlInput1"
                                    />
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Country<sup className="star-color">*</sup>
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option selected="">India</option>
                                        <option value={1}>USA</option>
                                        <option value={2}>England</option>
                                        <option value={3}>Germany</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        State<sup className="star-color">*</sup>
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option selected="">---Please Select State---</option>
                                        <option value={1}>USA</option>
                                        <option value={2}>England</option>
                                        <option value={3}>Germany</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        District<sup className="star-color">*</sup>
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option selected="">---Please Select District---</option>
                                        <option value={1}>USA</option>
                                        <option value={2}>England</option>
                                        <option value={3}>Germany</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Pincode
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-con-1"
                                        id="exampleFormControlInput1"
                                    />
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Address <span className="country-code">(Optional)</span>
                                    </label>
                                    <textarea
                                        className="form-control form-con-1"
                                        id="exampleFormControlTextarea1"
                                        rows={4}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 position-relative">
                                <div className="d-flex form-buttons">
                                    <a href="#" type="button" className="btn btn-danger m-1">
                                        DECLINE
                                    </a>
                                    <a
                                        href="amount.html"
                                        type="button"
                                        className="btn btn-success button-continue m-1"
                                    >
                                        CONTINUE
                                    </a>
                                </div>
                            </div>
                            {/* <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="note mt-3">
          <h4 class="fs-5 fw-bold d-inline-block"  data-bs-toggle="tooltip" data-bs-placement="right" title="Please fill the Qualification, Experience and Why your want to Volunteer">About your Self (Help)</h4>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="mb-4">
          <label  class="form-label">Qualification</label>
          <input type="email" class="form-control form-con-1" >
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="mb-4">
          <label  class="form-label">Experience in NGO Sector</label>
          <input type="email" class="form-control form-con-1" >
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="mb-4">
          <label  class="form-label">Why your want to Volunteer</label>
          <textarea class="form-control form-con-1"  rows="4"></textarea>
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 position-relative">
        <div class="d-flex form-buttons">
          <a href="#" type="button" class="btn button-decline">DECLINE</a>
          <a href="amount.html" type="button" class="btn button-continue">CONTINUE</a>
        </div>
      </div> */}
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="note mt-3">
                                    <p className="text-center">
                                        <sup>*</sup>Please note that no transaction charge is levied
                                        by intermediaries ondonations made through AMEX.Diners Club
                                        Internatonal, Master Card. However some banks may levy the
                                        netbanking transaction charges,Which may vary from bank to
                                        bank.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
)
