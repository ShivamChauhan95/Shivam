import { Link } from 'react-router-dom';
import './Home.css'
export function Headercontent() {
    return (
        <>
            <div className="top-strip bg-darkblue">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-unstyled">
                                <li className="mail d-inline-block"><i className="fa-regular fa-envelope-open text-white me-2"></i> <a href="#" className="text-white text-decoration-none">principal@lrdpublicschool.com</a></li>
                                <li className="d-inline-block mx-3"><i className="fa-solid fa-phone text-white mx-2"></i> <a href="#" className="text-white text-decoration-none">+91 63951 14363</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <a href="#" className="float-sm-end d-block bg-darkblue text-darkblue text-decoration-none  fw-bold regibtn">Register Now</a>
                            <ul className="list-unstyled float-sm-end">
                                <li className="active d-inline-block mx-2"><a href="#" className="text-white text-decoration-none bg-orange py-1 px-2">View Result</a></li>
                                <li className="about d-inline-block mx-2"><a href="#" className="text-white text-decoration-none">Calander</a></li>
                                <li className="about d-inline-block mx-2"><a href="#" className="text-white text-decoration-none">Blog</a></li>
                                <li className="about d-inline-block mx-2"><a href="#" className="text-white text-decoration-none">News & Event</a></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light">

                                <a href="index.html"><img src="images/logo.png" width="100px" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>

                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav  ms-auto">
                                        <li className="nav-item">
                                            <Link to="/">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/academics"> Academics</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/campus"> Campus Life</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/"> Media</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/"> Student Portal</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/"> View Result</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/"> Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}



function Homecontent() {
    return (
        <>
        

            <section>
                <div>
                    <div className="banner">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/slider-1.jpg" alt="..." />
                                    <div className="carousel-caption">
                                        <div className="row">
                                            <div className="col-sm-12 oswalffont">
                                                <h5>Welcome To </h5>
                                                <h3>LRD Pubic school</h3>
                                                <h5></h5>
                                                <a href="#" className="bg-orange text-darkblue text-decoration-none rounded-1 py-3 px-4 fw-bold mt-4 d-inline-block">Register Now</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/slider-2.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption">
                                        <div className="row">
                                            <div className="col-sm-12 oswalffont">
                                                <h5>Welcome To The</h5>
                                                <h3>LRD Pubic school</h3>
                                                <a href="#" className="bg-orange text-darkblue text-decoration-none rounded-1 py-3 px-4 fw-bold mt-4 d-inline-block">Register Now</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/slider-3.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h5>Welcome To The</h5>
                                                <h3>LRD Pubic school</h3>
                                                <a href="#" className="bg-orange text-darkblue text-decoration-none rounded-1 py-3 px-4 fw-bold mt-4 d-inline-block">Register Now</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div >
            </section >
            <section className="newsform my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">

                        </div>
                        <div className="col-sm-6">
                            <form className=" askform float-end">
                                <div className="row gx-0 fmheader">
                                    <div className="col-sm-2">
                                        <i className="fa-brands fa-wpforms text-darkblue fs-2"></i>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="m-0">Don’t Hesitate To Ask</p>
                                        <h4>Request A Quote</h4>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name"/>

                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control border-0" id="exampleInputPassword1" placeholder="Phone"/>
                                    </div>

                                    <div className="form-group">
                                        <textarea className="form-control border-0" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn bg-orange w-100 text-darkblue py-3 fw-bold">Submit Enquery</button>
                                </div>



                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="wrapper">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-sm-4">
                            <div className="card border-0">
                                <div className="card-header rounded-0 bg-blue1 py-4 px-2">
                                    <div className="row">
                                        <div className="col-sm-3 text-end">
                                            <img src="images/facilites.png" />
                                        </div>
                                        <div className="col-sm-9 text-white">
                                            <h4 className="fs-5 fw-bold m-0 ">Facilities</h4>
                                            <a href="#" className="text-white text-decoration-none">Learn More <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>


                                </div>
                                <img src="images/homepage-facilities.jpg" width="100%" />
                                <div className="card-body">
                                    <p className="card-text mb-5">Boys must be <span>Physically</span> fit if they are to benefit from the education and life of a boarding school in Dehradun. We would like the parents to know that the loss of an active term is not something to worry about or a sign of failing health.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card border-0">
                                <div className="card-header rounded-0 bg-blue2 py-4 px-2">
                                    <div className="row">
                                        <div className="col-sm-3 text-end">
                                            <img src="images/sport-center.png" />
                                        </div>
                                        <div className="col-sm-9 text-white">
                                            <h4 className="fs-5 fw-bold m-0 ">Activities</h4>
                                            <a href="#" className="text-white text-decoration-none">Learn More <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <img className="" src="images/homepage-activities.jpg" width="100%" />
                                <div className="card-body">
                                    <p className="card-text mb-5">Boys must be Physically fit if they are to benefit from the education and life of a boarding school in Dehradun. We would like the parents to know that the loss of an active term is not something to worry about or a sign of failing health.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card border-0">
                                <div className="card-header bg-blue3 rounded-0 py-4 px-2">
                                    <div className="row">
                                        <div className="col-sm-3 text-end">
                                            <img src="images/book.png" />
                                        </div>
                                        <div className="col-sm-9 text-white">
                                            <h4 className="fs-5 fw-bold m-0 ">Admission</h4>
                                            <a href="#" className="text-white text-decoration-none">Learn More <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <img src="images/homepage-admission.jpg" width="100%" />
                                <div className="card-body">
                                    <p className="card-text">Boys must be Physically fit if they are to benefit from the education and life of a boarding school in Dehradun. We would like the parents to know that the loss of an active term is not something to worry about or a sign of failing health.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="wrapper2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3 className="mb-4 pb-3">School Video Tour</h3>
                            <div className="embed-responsive embed-responsive-16by9">

                                <iframe width="100%" height="300" src="https://www.youtube.com/embed/8BZAnwX2E-k" title="Col Brown School  - 2021" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <h3 className="mb-4 pb-3">School News & Updates</h3>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <a href="#"><img src="images/news-banner-school.jpg" width="100px" /></a>
                                        </div>
                                        <div className="col-sm-9 mb-4 mt-1">
                                            <a className="text-decoration-none nwdate" href="#">APRIL 29,2023</a>
                                            <a className="text-decoration-none" href="#"><h4 className="text-dark mt-1">SJA, Col Brown Cambridge School lift Heritage School Invitational Table Tennis Trophies</h4></a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#"><img src="images/colowner.jpg" width="100px" /></a>
                                        </div>
                                        <div className="col-sm-9 mt-1">
                                            <a className="text-decoration-none nwdate" href="#">APRIL 20,2023</a>
                                            <a className="text-decoration-none" href="#"><h4 className="text-dark mt-1">Col. Brown 81st Death Anniversary (18th April 2023)</h4></a>
                                        </div>
                                    </div>
                                    <a className="text-decoration-none text-darkblue py-1 fw-bold mt-4 d-inline-block" href="#">Read The Blog <i className="ms-2 gdlr-core-pos-right fa fa-long-arrow-right"></i></a>

                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <a href="#"><img src="images/news-event-demo-150x150.jpg" width="100px" /></a>
                                        </div>
                                        <div className="col-sm-9 mb-5 mt-1">
                                            <a className="text-decoration-none nwdate" href="#">APRIL 13,2023</a>
                                            <a className="text-decoration-none" href="#"><h4 className="text-dark mt-1">Annual Prize Distribution Ceremony 2023</h4></a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#"><img src="images/news-event-demo-150x150.jpg" width="100px" /></a>
                                        </div>
                                        <div className="col-sm-9 mt-1">
                                            <a className="text-decoration-none nwdate" href="#">March 20,2023</a>
                                            <a className="text-decoration-none" href="#"><h4 className="text-dark mt-1">Wipro Earthian Regional Award in Uttarakhand 2023</h4></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-two mt-5 text-center">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12">
                            <h4 className="text-white pb-2">Apply for Admission</h4>
                            <p className="text-white mt-3">Established in 1926, Colonel Brown Cambridge School is one of the oldest and best Boys Boarding School in India. Colonel Brown School offers admission from grades I to XII. The first stage of the admission process is to initiate the registration by filling the ‘Registration Form’ along with the prescribed registration fee (refer to the fee structure).</p>
                            <a href="#" className="text-decoration-none rounded-1 d-inline-block bg-orange py-3 fw-bold px-5 mt-4 text-darkblue">Apply Now </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="events py-5">
                <div className="container">
                    <h4 className="fs-4 fw-bolder pb-2 mb-4">Events</h4>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card border-0">
                                <img src="images/plantation-500x450.jpg" />
                                <div className="card-body">
                                    <h5 className="card-text fw-bold">August 2,2019</h5>
                                    <a href="#" className="text-decoration-none">PLANTATION</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card border-0">
                                <img src="images/earthday-500x450.jpg" />
                                <div className="card-body">
                                    <h5 className="card-text  fw-bold">August 2,2019</h5>
                                    <a href="#" className="text-decoration-none">Earth Day</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card border-0">
                                <img src="images/school-fest-2019-500x450.jpg" />
                                <div className="card-body">
                                    <h5 className="card-text fw-bold">August 2,2019</h5>
                                    <a href="#" className="text-decoration-none">School Fest 2019</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card border-0">
                                <img src="images/teacher-day-2019-500x450.jpg" />
                                <div className="card-body">
                                    <h5 className="card-text fs-9 text-secondary fw-bold">August 2,2019</h5>
                                    <a href="#" className="text-decoration-none">Teachers Day 2019</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="almuni">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mt-5">
                            <h3 className="fs-3 fw-bold mt-5">Alumni Registration</h3>
                            <p>Colonel Brown Cambridge School for Indian Boys was founded in March 1926, by Col.and Mrs. W.Brown, for Indian boys. It is an English Medium <strong>Residential School</strong> and is open to all boys irrespective of caste, creed or social status. The school ranks high amongst educational Institutions in India and one of the best ICSE Schools in Dehradun.</p>

                            <a href="#" className="text-decoration-none bg-orange text-darkblue fw-bold py-3 px-4 rounded-1"> <i className="gdlr-core-pos-left fa fa-graduation-cap"></i> register now</a>

                        </div>
                        <div className="col-sm-6">
                            <img src="images/alumni-image.jpg" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="test">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm-8 py-4">
                                    <h5 className="text-white" >Entrance Test to be conducted for the session 2023-24.Date: 03 December 2022</h5>
                                </div>
                                <div className="col-sm-4 py-4">
                                    <a href="#"><i className="fa-solid fa-arrow-left text-white arrow"></i></a>
                                    <a href="#"> <i className="fa-solid fa-arrow-right text-white arrow"></i></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-4">
                            <a href="#" className="text-decoration-none text-darkblue fs-5 fw-bold regbtn ms-4 d-inline-block">Register Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Homecontent;