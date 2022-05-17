import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <section className='colorlib-services' data-section='services'>
                    <div className='colorlib-narrow-content'>
                        <div className='row'>
                            <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated' data-animate-effect='fadeInLeft'>
                                <span className='heading-meta'>What I do? </span>
                                <h2 className='colorlib-heading'>Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className='row row-pt-md'>
                            <div className="col-md-4 text-center animate-box fadeInUp animated">
                                <div className="services color-1">
                                    <span className='icon'><i className='icon-bulb'></i></span>
                                    <div className='desc'>
                                        <h3>Data Analytics</h3>
                                        <p>Data Insights of unstructured data </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box fadeInUp animated">
                                <div className="services color-2">
                                <span className='icon'><i className='icon-bulb'></i></span>
                                    <div className="desc">
                                        <h3>Software</h3>
                                        <p>Robust and scalable software development</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box fadeInUp animated">
                                <div className="services color-3">
                                <span className='icon'><i className='icon-bulb'></i></span>
                                    <div className="desc">
                                        <h3>Web Application</h3>
                                        <p>Responsive web application</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box fadeInUp animated">
                                <div className="services color-4">
                                <span className='icon'><i className='icon-bulb'></i></span>
                                    <div className="desc">
                                        <h3>Web Crawling</h3>
                                        <p>Social Media & Web crawling</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box fadeInUp animated">
                                <div className="services color-5">
                                <span className='icon'><i className='fas fa-database'></i></span>
                                    <div className="desc">
                                        <h3>Data Management</h3>
                                        <p>Big Data Management</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box fadeInUp animated">
                                <div className="services color-6">
                                <span className='icon'><i className='fas fa-user'></i></span>
                                    <div className="desc">
                                        <h3>People Management</h3>
                                        <p>Leading a team of skilled developer</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                
                </section>    
            </div>
        );
    }
}

export default Services;
