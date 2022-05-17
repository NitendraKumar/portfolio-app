import React, { Component } from 'react';

class StatsCounter extends Component {
    render() {
        return (
            <div>
                <div id='colorlib-counter' className='colorlib-counters animated' style={{backgroundImage:'url(images/cover_bg_1.jpg)', dataStellerBackgroundRatio:'0.5'}}>
                    <div className='overlay'></div>
                    <div className='colorlib-narrow-content'>
                        <div className='row'>
                            <div className='col-md-3 text-center animate-box fadeInUp animated'>
                                <span className="colorlib-counter js-counter" data-from="0" data-to="3000" data-speed="500" data-refresh-interval="50">3K</span>
                                <span className="colorlib-counter-label">Cups of coffee</span>
                            </div>
                            <div className='col-md-3 text-center animate-box fadeInUp animated'>
                                <span className="colorlib-counter js-counter" data-from="0" data-to="15" data-speed="500" data-refresh-interval="50">20+</span>
                                <span className="colorlib-counter-label">Projects</span>
                            </div>
                            <div className='col-md-3 text-center animate-box fadeInUp animated'>
                                <span className="colorlib-counter js-counter" data-from="0" data-to="5" data-speed="500" data-refresh-interval="50">10+</span>
                                <span className="colorlib-counter-label">Clients</span>
                            </div>
                            <div className='col-md-3 text-center animate-box fadeInUp animated'>
                                <span className="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="500" data-refresh-interval="50">5</span>
                                <span className="colorlib-counter-label">Partners</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsCounter;
