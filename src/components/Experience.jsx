import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <section className='colorlib-experience' data-section='experience'>
                    <div className='colorlib-narrow-content'>
                        <div className='row'>
                            <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box animated fadeInLeft' data-animate-effect='fadeInLeft'>
                                <span className='heading-meta'>Experience</span>
                                <h2 className='colorlib-heading animate-box animated fadeInUp' data-animate-effect='fadeInUp'>Work Eperience</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='timeline-centered'>
                                    <article className='timeline-entry animate-box animated fadeInLeft' data-animate-effect='fadeInLeft'>
                                        <div className='timeline-entry-inner'>
                                            <div className='timeline-icon color-1'>
                                                <i className='icon-pen2'></i>
                                            </div>
                                            <div className='timeline-label'>
                                                <h2>
                                                    <a href='/'>Research Engineer- Singapore Management Universing</a>
                                                    <span> 2018-Present</span>
                                                </h2>
                                                <p></p>
                                                <p>
                                                    Requirements Gathring, Architectural Design & Discussion.
                                                    Develope Web App to demonstrate research work, Collect Data from Social Media and Web.
                                                    Data Analytic using python stack. Basic Machine Learning.
                                                    Data Management and System Health Monitoring.
                                                </p>

                                                <p>Managing a team of 4 skilled Engineers</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className='timeline-entry animate-box animated fadeInLeft' data-animate-effect='fadeInLeft'>
                                        <div className='timeline-entry-inner'>
                                            <div className='timeline-icon color-2'>
                                                <i className='icon-pen2'></i>
                                            </div>
                                            <div className='timeline-label'>
                                                <h2>
                                                    <a href='/'>Senior Software Engineer- Times Internet </a>
                                                    <span> 2016-2018</span>
                                                </h2>
                                                <p>
                                                    Project to manage all kind of digital assets Throughout Times of India like articles, slide shows,
                                                    videos etc. Scripts are constantly running and pulling data from FTP servers of various 3rd Party
                                                    News providers and ingesting into our system
                                                </p>
                                                <p>
                                                    Project to analyze what all users are reading, commenting upon, sharing etc. on all Times of India
                                                    Domain [website and mobile Application]. Capturing and creating different analysis reports of All
                                                    authors (their articles and time spent), Cross walk.
                                                </p>

                                            </div>
                                        </div>
                                    </article>
                                    <article className='timeline-entry animate-box animated fadeInLeft' data-animate-effect='fadeInLeft'>
                                        <div className='timeline-entry-inner'>
                                            <div className='timeline-icon color-2'>
                                                <i className='icon-pen2'></i>
                                            </div>
                                            <div className='timeline-label'>
                                                <h2>
                                                    <a href='/'>Software Engineer- FirstRain Software Center</a>
                                                    <span> 2012-2016</span>
                                                </h2>
                                                <p>
                                                    web crawler (also known as a web spider or web robot) is a program or automated script which
                                                    browses the World Wide Web in a methodical, automated manner. A Web crawler starts with a
                                                    list  of URLs to visit, called the seeds or index pages. As the crawler visits these URLs, it identifies all
                                                    the hyperlinks in the page and adds them to the list of URLs to visit, called the crawl frontier (index pages)
                                                    or Story Pages. It supports login, JavaScript, Depth pages as well.
                                                </p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className='timeline-entry animate-box animated fadeInLeft' data-animate-effect='fadeInLeft'>
                                        <div className='timeline-entry-inner'>
                                            <div className='timeline-icon color-4'>
                                                <i className='icon-pen2'></i>
                                            </div>
                                            <div className='timeline-label'>
                                                <h2>
                                                    <a href='/'>Intership- FirstRain Software Center</a>
                                                    <span> 2012-Jan To 2012 June</span>
                                                </h2>
                                                <p>
                                                    Automatic summarization is the process of reducing a text document in order to create a summary that
                                                    retains the most important points of the original document. As the problem of information overload has
                                                    grown, and as the quantity of data has increased, so has interest in automatic summarization.
                                                    The main idea of Summarization to find a representative subset of the data, which contains the information
                                                    of the entire set. Document Summarization, tries to automatically create a representative summary or abstract
                                                    of the entire document, by finding the most informative sentences.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;
