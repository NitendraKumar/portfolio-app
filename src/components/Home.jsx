import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <section id='colorlib-hero' className='js-fullheight' data-section='home' >
                <div className='flexslider js-fullheight'>
                    <ul className='slides'>
                        <li style={{backgroundImage:'url(images/img_bg.jpg)', resizeMode:'cover'}}>
                            <div className='overlay'>
                                <div className='container-fluid'>
                                    <div className="row">
                                        < div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className='slider-text-inner js-fullheight'>
                                                <div className='desc'>
                                                    <h1>Hi<br/>I'm Nitendra</h1>
                                                    <p><a className='btn btn-primary btn-learn' 
                                                    href="https://docs.google.com/document/d/1vdNYUflhkEvrICpMaYUmug5fh-bMqZec6rOdghqrZPE/edit?usp=sharing"
                                                    target='_blank' rel='noopener noreferrer'>View Resume<i className='icon-download4'></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                         <li style={{backgroundImage:'url(images/img_bg1.jpg)'}}>
                            <div className='overlay'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text'>
                                            <div className='slider-text-inner'>
                                                <div className='desc'>
                                                    <h1>I Love Building<br/>THINGS !!</h1>
                                                    <p><a className='btn btn-primary btn-learn' 
                                                    href='https://github.com/NitendraKumar' target='_blank' rel='noopener noreferrer'> View Projects <i className='icon-briefcase3'/></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{backgroundImage:'url(images/img_bg_22.jpg)', resizeMode:'cover'}}>
                            <div className='overlay'>
                                <div className='container-fluid'>
                                    <div className="row">
                                        < div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className='slider-text-inner js-fullheight'>
                                                <div className='desc'>
                                                    <h1>I often <br/>WRITE !!</h1>
                                                    <p><a className='btn btn-primary btn-learn' 
                                                    href='https://medium.com/@nitinjnumca09' 
                                                    target='_blank' rel='noopener noreferrer'>View Blog<i className='icon-bulb'></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> 
                    </ul>
                </div> 
            </section>
        );
    }
}

export default Home;
