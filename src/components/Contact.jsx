import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <section className='colorlib-contact' data-section='contact'>
                    <div className='colorlib-narrow-content'>
                        <div className='row'>
                            <div className='col-md-6 col-md-pull-3 col-md-offset-3 animate-box animated fadeInLeft' data-animate-effect='fadeInLeft'>
                                <span className='heading-meta'>Get In Touch</span>
                                <h2 className='colorlib-heading'>Contact</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-5">
                                <div className='colorlib-feature colorlib-feature-sm animate-box animated fadeInLeft' data-animate-effect='fadeInLeft'>
                                    <div className='colorlib-icon'>
                                    <i className="fas fa-address-book"></i>
                                    </div>
                                    <div className='colorlib-text'>
                                        <p>
                                                <a href="https://www.facebook.com/nitendra.kumar.09/" target="_blank" rel="noopener noreferrer" >
                                                    <i className="fab fa-facebook" style={{ marginRight: '15px', fontSize:'40px', color: '#4267B2' }}></i>
                                                </a>


                                                <a href="https://twitter.com/nitinjnu" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-twitter" style={{ marginRight: '15px', fontSize:'40px', color: '#1DA1F2' }}></i>
                                                </a>


                                                <a href="https://www.instagram.com/nitendrati/" target="_blank" rel="noopener noreferrer" >
                                                    <i className="fab fa-instagram" style={{ marginRight: '15px', fontSize:'40px', color: '#405DE6' }}></i>
                                                </a>


                                                <a href="https://www.linkedin.com/in/nitendra-jnumca09-9b216035/" target="_blank" rel="noopener noreferrer" >
                                                    <i className="fab fa-linkedin-in" style={{ marginRight: '15px', fontSize:'40px', color: '#0e76a8' }}></i>
                                                </a>


                                                <a href="https://github.com/NitendraKumar" target="_blank" rel="noopener noreferrer" >
                                                    <i className="fab fa-github" style={{ marginRight: '15px', fontSize:'40px',color: '#211F1F' }}></i>
                                                </a>


                                                <a href="https://medium.com/@nitinjnumca09" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-blogger"  style={{ marginRight: '15px', fontSize:'40px', color: '#FF5722' }}></i>
                                                </a>
                                            

                                        </p>
                                    </div>
                                </div>
                                <div className='colorlib-feature colorlib-feature-sm animate-box animated fadeInLeft' data-animate-effect='fadeInLeft'>
                                    <div className='colorlib-icon'>
                                        <i className='icon-map'></i>
                                    </div>
                                    <div className='colorlib-text'>
                                        <p>St George Road Blk 20, Singapore</p>
                                    </div>
                                </div>
                                <div className='colorlib-feature colorlib-feature-sm animate-box animate fadeInLeft' data-animate-effect='fadeInLeft'>
                                    <div className='colorlib-icon'>
                                        <i className='icon-phone'></i>
                                    </div>
                                    <div className='colorlib-text'>
                                        <p>(+65) 88897574</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-7 col-md-push-1'>
                                <div className='row'>
                                    <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box animated fadeInRight" data-animate-effect='fadeInRight'>
                                        <form action="">
                                            <div className="form-group">
                                                <input type='text' className='form-control' placeholder='Name'></input>
                                            </div>
                                            <div className="form-group">
                                                <input type='text' className='form-control' placeholder='Email'></input>
                                            </div>
                                            <div className="form-group">
                                                <input type='text' className='form-control' placeholder='Subject'></input>
                                            </div>
                                            <div className="form-group">
                                                <textarea id='message' cols='30' rows='7' className='form-control' placeholder='Message'></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type='submit' className='btn btn-primary btn-send-message' value='Send Message'></input>
                                            </div>
                                        </form>
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

export default Contact;
