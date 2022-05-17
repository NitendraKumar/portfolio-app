import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <section className="colorlib-education" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Education</span>
                            <h2 className="colorlib-heading animate-box fadeInUp animated">Education</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <div className="fancy-collapse-panel">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Of Computer Applications
</a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div className="panel-body">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p className='colorlib-heading text-center text-success'>
                                                            Computer Science
                                                                
                                                        </p>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='text-center colorlib-heading'>
                                                            <span ><a href='https://www.jnu.ac.in/scss' target='_blank' rel='noopener noreferrer'>School of Computer and Systems Sciences</a></span>
                                                                Jawaharlal Nehru University
                                                                <span>New Delhi, INDIA</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachular Degree in Science
</a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div className="panel-body">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p className='colorlib-heading text-center text-success'>
                                                            Physics, Chemistry &amp; Maths
                                                            </p>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='text-center colorlib-heading'>
                                                            <span ><a href='https://www.bujhansi.ac.in/' target='_blank' rel='noopener noreferrer'>Bundelkhand University</a></span>
                                                            <span>Uttar Pradesh, INDIA</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Senior Secondary Education
</a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div className="panel-body">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p className='colorlib-heading text-center text-success'>
                                                            Physics, Chemistry &amp; Maths
                                                            </p>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='text-center colorlib-heading'>
                                                            <span ><a href='https://upmsp.edu.in/' target='_blank' rel='noopener noreferrer'>Board of High School and Intermediate Education</a></span>
                                                            <span>Uttar Pradesh, INDIA</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFour">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">High School Education
</a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div className="panel-body">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p className='colorlib-heading text-center text-success'>
                                                            English, Hindi, Science, Art
                                                            </p>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='text-center colorlib-heading'>
                                                            <span ><a href='https://upmsp.edu.in/' target='_blank' rel='noopener noreferrer'>Board of High School and Intermediate Education</a></span>
                                                            <span>Uttar Pradesh, INDIA</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;
