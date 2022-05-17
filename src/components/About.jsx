import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className='colorlib-about' data-section='about'>
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect='fadeInLeft'>
                                <div className='col-md-12'>
                                    <div className="about-desc">
                                        <span className="heading-meta">About Me</span>
                                        <h2 className='colorlib-heading'>Who m I?</h2>
                                        <p className='lead text-justify text-warning' style={{fontFamily:'sans-serif'}}>
                                            Quality-Oriented professional with 8.5 year and a proven knowledge of advanced 
                                            technology, application development and benchmarking. Aiming to leverage my skills 
                                            to successfully fill the Full Stack Developer role.
                                        </p>
                                        <p className='lead text-justify text-warning' style={{fontFamily:'sans-serif'}}>
                                            Despite any hard situation, I keep my focus on my goals and always move towards them.
                                            I am a self-motivated and self-taught professional who likes to solve problems and eager to learn.
                                            I merge a passion of building analytics around big data. My repertoire includes programming 
                                            languages and tools such as JAVA, Python, MongoDB, Solr, ElasticSearch, Spring, Spring-Boot, ReactJS, 
                                            Twitter Bootstrap, HTML, CSS, Apache-tomcat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 animate-box fadeInLeft animated ' data-animate-effect='fadeInLeft'>
                            <div className='services color-1'>
                                <span className='icon2'><i className='icon-bulb'></i></span>
                                <h3>Data Analytics</h3>
                            </div>
                        </div>
                        <div className='col-md-3 animate-box fadeInRight animated' data-animate-effect='fadeInRight'>
                            <div className='services color-2'>
                                <span className='icon2'><i className='icon-globe-outline'></i></span>
                                <h3>Web Design</h3>
                            </div>
                        </div>
                        <div className='col-md-3 animate-box fadeInUp animated' data-animate-effect='fadeInUp'>
                            <div className='services color-3'>
                                <span className='icon2'><i className='fas fa-terminal'></i></span>
                                <h3>Software Design</h3>
                            </div>
                        </div>
                        <div className='col-md-3 animate-box fadeInDown animated' data-animate-effect='fadeInDown'>
                            <div className='services color-4'>
                                <span className='icon2'> <i className='fas fa-spider'></i></span>
                                <h3>Web Scraping</h3>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 animate-box fadeInLeft animated' data-animate-effect='fadeInLeft'>
                            <div className='hire'>
                                <h2>
                                    I am happy to know you
                                    <br/>
                                    10+ Projects done successfully
                                </h2>
                                <a href='/' className='btn-hire'> Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

export default About;
