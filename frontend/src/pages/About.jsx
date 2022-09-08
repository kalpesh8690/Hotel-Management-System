import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';
function About() {
    return (
    <div className="container aboutus">
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">About Us </h1>
                <p className="lead text-justify text-center">Om Hotel was founded in 2021 with a vision to empower hotels across the world with a powerful yet simple technology that can evolve with the current and the future changing market dynamics, helping Hoteliers achieve efficient operations, expanding market reach, increased occupancy and profitability along with the right solution to deliver exceptional guest experiences.</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</Link>
                </div>
            </div>
        </div>
        <div className="about_company">
            <h1 className="display-4">About Company</h1>
            <div className="pt-4">
                <p className="about_info">Om Hotel is a leading provider of hotel accommodation worldwide, offering booking services through its own network of localised websites.</p>
            </div>
        </div>
        <div className="testimony">
            <h1 className="display-4 mb-4">What Our Clients says</h1>
            <div className="row mb-5">
                <div className="col-md-10 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner card border-0 shadow-lg p-4">
                            <div className="carousel-item active text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer.svg')} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Customer </h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer1.svg')} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Customer </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer3.svg')} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Customer </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer4.svg')} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Social Media</h3>
                                            <p>To get started, simply open the Facebook page and select Reply underneath the comment you would like to respond to. Type your reply and then click Enter. Your reply will now be displayed in the comments section for all to see. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="team">
            <h1 className="display-4">Our Team</h1>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="./mehul.jpg" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Project Partner</h5>
                        <div className="card-text text-black-50">Rathod Mehul<p className="float-right">1 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://pbs.twimg.com/profile_images/1207893967737458688/IiXO0uB9_400x400.jpg" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Project Partner</h5>
                        <div className="card-text text-black-50">Kalpesh Chauhan <p className="float-right">1 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;