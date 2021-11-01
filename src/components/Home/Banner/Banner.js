import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="container banner">
                <div className="row">
                    <div className="banner-container">
                        <img src="https://i.ibb.co/W09jxYQ/banner.jpg" className="img-fluid" alt="Notebook" />
                        <div className="content">
                            <p>This is what holidays, travels, vacations are about. It is not really rest or even leisure we chase. We strain to renew our capacity to wonder.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;