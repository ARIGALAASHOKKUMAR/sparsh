import Footer from "./Footer"
import Header from "./Header"

export const Rajendra = () => {

    return (
        <div>
            <section className="profile-part1" style={{ marginTop: "-10px" }}>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 profile-collum1 p-5">
                            <div className="profile1 d-flex">
                                <div className="pro-img">
                                    <img
                                        src="images/khajuria.jpg"
                                        className="img-fluid"
                                        style={{ height: "200px", width: "200px" }}
                                        alt="no data"
                                    />
                                </div>
                                <div className="pro-text my-auto">
                                    <h3>Dr Rajendra Prasad Khajuria</h3>
                                    <p>Indian Forest Service (IFS)</p>
                                </div>
                            </div>
                            <hr className="pro-line pb-3" />
                            <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 ed-collum p-4">
                                    <h4 className="ed-pub-head">Educational Qualification</h4>
                                    <div className="d-flex mt-3">
                                        <img
                                            src="images/profile-img/education.webp"
                                            width={25}
                                            height={25}
                                            className="me-2"
                                            alt="no data"
                                        />
                                        <div className="ed-text">
                                            <h5>PhD | University of Toronto, Canada-2008</h5>
                                            <p>Forest Economics</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <img
                                            src="images/profile-img/education.webp"
                                            width={25}
                                            height={25}
                                            className="me-2"
                                            alt="no data"
                                        />
                                        <div className="ed-text">
                                            <h5>
                                                MBA | American International Institute of Technology - 2000
                                                Distance Educationmode
                                            </h5>
                                            <p>Management</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <img
                                            src="images/profile-img/education.webp"
                                            width={25}
                                            height={25}
                                            className="me-2"
                                            alt="no data"
                                        />
                                        <div className="ed-text">
                                            <h5>
                                                M.Sc | Indira Gandhi National Forest Academy,Dehradun, India
                                                - 1994
                                            </h5>
                                            <p>Forestry</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <img
                                            src="images/profile-img/education.webp"
                                            width={25}
                                            height={25}
                                            className="me-2"
                                            alt="no data"
                                        />
                                        <div className="ed-text">
                                            <h5>M.Sc | University of Jammu,Jammu,India - 1990 </h5>
                                            <p>Mathematics</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <img
                                            src="images/profile-img/education.webp"
                                            width={25}
                                            height={25}
                                            className="me-2"
                                            alt="no data"
                                        />
                                        {/* test */}
                                        <div className="ed-text">
                                            <h5>
                                                B.Sc | Maulana Azad Memorial College,Jammu,India - 1987
                                            </h5>
                                            <p>Physics, Chemistry,Maths</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3" />
                                </div>
                                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 mt-4 mt-md-0">
                                    <p className="text-la">
                                        <b>Dr Rajendra Prasad Khajuria</b> is an Indian Forest Service
                                        (IFS) officer of 1991 batch from Andhra Pradesh cadre. He is
                                        presently working as Principal Chief Conservator of
                                        Forests(PCCF) in Andhra Pradesh. He has vast experience of 33
                                        years in the government and has served in various capacities in
                                        the Forest and other departments of the Government of Andhra
                                        Pradesh. He has served the Government of India on Central
                                        deputation as well.He holds a PhD in Forest Economics from the
                                        University of Toronto, Canada. He has published several papers
                                        and contributed chapters in various books related to forestry.
                                    </p>
                                    <div className="published-text">
                                        <h4 className="ed-pub-head">
                                            Publications &amp; Research work:
                                        </h4>
                                        <div className="d-flex pub-text1">
                                            <p className="me-2">
                                                <b>1.</b>
                                            </p>
                                            <p>
                                                Khajuria,R.P.,Kant,S.,Laaksonen-Craig,S.2012. “Valuation of
                                                investments in carbonsequestration projects from managed
                                                forests.” Paper submitted to{" "}
                                                <b>Forest Policy and Economics.</b>
                                            </p>
                                        </div>
                                        <div className="d-flex pub-text1">
                                            <p className="me-2">
                                                <b>2.</b>
                                            </p>
                                            <p>
                                                Khajuria,R.P.,Kant,S.,Laaksonen-Craig, S.20012. “Modelling
                                                of timber harvesting options when using timber prices as a
                                                mean reverting with stochastic trend.”{" "}
                                                <b>Canadian Journal of Forest Research, 42:1-11 (2012)</b>
                                            </p>
                                        </div>
                                        <div className="d-flex pub-text1">
                                            <p className="me-2">
                                                <b>3.</b>
                                            </p>
                                            <p>
                                                Khajuria, R.P., Kant, S., Laaksonen-Craig, S.
                                                2008.“Valuation of timber harvesting optionsusing contingent
                                                claims approach.” <b>Land Economics</b>. Nov. 2009 issue, P:
                                                655-671.
                                            </p>
                                        </div>
                                        <div className="d-flex pub-text1">
                                            <p className="me-2">
                                                <b>4.</b>
                                            </p>
                                            <p>
                                                Khajuria, R.P. 2007. “Three essays on real options analysis
                                                of forestry investments understochastic timber prices.”{" "}
                                                <b>PhD thesis.</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex pub-text1 mt-3">
                                <p className="me-2">
                                    <b>5.</b>
                                </p>
                                <p>
                                    Khajuria, R.P., Laaksonen-Craig, S., Kant, S. 2007. “A marginal
                                    cost analysis of trade-offs inold-growth preservation in Ontario.”{" "}
                                    <b>Forest Policy and Economics 10(2008) : 326-335.</b>
                                </p>
                            </div>
                            <div className="d-flex pub-text1">
                                <p className="me-2">
                                    <b>6.</b>
                                </p>
                                <p>
                                    Khajuria, R.P., Kant, S. 2007. “Trade-offs in old-growth
                                    preservation.” Paper presented in{" "}
                                    <b>SOFOR conference 2007, San Antonio, Texas, USA.</b>
                                </p>
                            </div>
                            <div className="d-flex pub-text1">
                                <p className="me-2">
                                    <b>7.</b>
                                </p>
                                <p>
                                    Khajuria, R.P., Kant, S. 2006. “Linear programming solutions for
                                    trade-offs in implementationof sustainable forest management.”
                                    Paper presented in{" "}
                                    <b>
                                        Operations Research groupconference Burlington, Vermont, USA.
                                    </b>
                                </p>
                            </div>
                            <div className="d-flex pub-text1">
                                <p className="me-2">
                                    <b>8.</b>
                                </p>
                                <p>
                                    Khajuria, R.P. 2005. “Determinants of environmental conservation:
                                    A cross-national study.”Working paper.
                                </p>
                            </div>
                            <div className="d-flex pub-text1">
                                <p className="me-2">
                                    <b>9.</b>
                                </p>
                                <p>
                                    Khajuria, R.P. 2004. “ Wood supply in India”. Term paper for
                                    course in International Trade andenvironment.
                                </p>
                            </div>
                            <div className="d-flex pub-text1">
                                <p className="me-2">
                                    <b>10.</b>
                                </p>
                                <p>
                                    Khajuria, R.P. 2001. “Testing the effectiveness of advertising
                                    campaign of hotel Combermere inShimla, H.P.,India.” Dissertation
                                    for MBA course.
                                </p>
                            </div>
                            <h4 className="mt-4 mb-3 ed-pub-head">Workshops attended:</h4>
                            <ul className="pub-ul">
                                <li className="pub-li">
                                    3 day 1st International Congress on Urban Green Spaces at New
                                    Delhi, made apresentation on Economic valuation of KBR National
                                    Park.
                                </li>
                                <li className="pub-li">
                                    Workshop on “Green Growth” at Indian School of Business,
                                    <b>Hyderabad</b>, India from December 17-18, 2008.
                                </li>
                                <li className="pub-li">
                                    Three day conference on centennial celebrations of the University
                                    of Toronto, Canada from October 1-3, 2007,<b>Toronto.</b>
                                </li>
                                <li className="pub-li">
                                    Attended Southern Foresters’ conference in San Antonio,{" "}
                                    <b>Texas,USA</b> in Feb., 2007.
                                </li>
                                <li className="pub-li">
                                    Attended Operations research group conference at Burlington,{" "}
                                    <b>Vermont,USA</b> in Oct.,2006.
                                </li>
                            </ul>
                            <h4 className="mt-4 mb-3 ed-pub-head">Trainings attended:</h4>
                            <div className="table-responsive">
                                <table className="table khaju-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Training/Course</th>
                                            <th scope="col">Institution</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Forestry Management: NewChallenges</td>
                                            <td>IIFM, Bhopal</td>
                                            <td>20-24 Nov. 1995</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Social Skill DevelopmentProgramme in JFM</td>
                                            <td>IIFM, Bhopal</td>
                                            <td>23-27 Dec. 1996</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Financial Management of Projects</td>
                                            <td>IFMR Chennai</td>
                                            <td>30 Jun-5 July 1997</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Management of Change:Natural Resources Management</td>
                                            <td>Vinod Gupta School ofManagement,IITKharagpur</td>
                                            <td>20-24 Oct. 1997</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Productivity management</td>
                                            <td>
                                                Vaikunth Mehta NationalSchool of CooperativeManagement, Pune
                                            </td>
                                            <td>15-19 Nov.1999</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Management of Change in Organisation</td>
                                            <td>ASCI, Hyderabad</td>
                                            <td>28 Dec.-1 Jan. 1999</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Effective Communication and Presentation Skills</td>
                                            <td>Center for Cross CulturalCommunication, NewDelhi</td>
                                            <td>1999</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Advanced Management Course for IFS officers</td>
                                            <td>IGNFA, Dehra Dun</td>
                                            <td>27 Aug.-14 Apr.,2001</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>
                                                Intelligence gathering and Crime Prevention with special
                                                reference to Wildlife
                                            </td>
                                            <td>NPA, Hyderabad</td>
                                            <td>27-31 Jan. 2003</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Advanced Management Course for IFS officers</td>
                                            <td>IGNFA, Dehra Dun</td>
                                            <td>5 -14 May 2008</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>Integrated Development ofWastelands</td>
                                            <td>
                                                Amity School of Natural Resources and Sustainable
                                                Development,Noida
                                            </td>
                                            <td>4-11 Jan. 2009</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>Effective Leadership and Conflict Resolution</td>
                                            <td>Institute of Management Training and Research,Goa</td>
                                            <td>08-12 June, 2009</td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td>Environment and Disaster</td>
                                            <td>National Institute of Disaster Management,New Delhi</td>
                                            <td>09-13 July, 2009</td>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td>Bamboo for Livelihood</td>
                                            <td>IPIRTI, Banglore</td>
                                            <td>05-11 Feb.,2011</td>
                                        </tr>
                                        <tr>
                                            <td>15</td>
                                            <td>Ecosystem Services Valuation</td>
                                            <td>IIFM Bhopal</td>
                                            <td>21-23 Jan., 2012</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>Public Private Parternership</td>
                                            <td>IFGTB, Coimbatore</td>
                                            <td>21-22 Feb., 2012</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
