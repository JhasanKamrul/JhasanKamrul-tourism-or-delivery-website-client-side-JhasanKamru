import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className="about row">
                <div className="col-md-3">
                    <img src="https://js.skyscnr.com/sttc/blackbird/static/media/first_pillar.5de1acf4.svg" className="img-fluid" alt="" />
                    <h4>Ready when you are</h4>
                    <span>See where you can travel to right now and find the best deals across thousands of flights, hotels and car hire options</span>
                </div>
                <div className="col-md-4">
                    <img src="https://js.skyscnr.com/sttc/blackbird/static/media/second_pillar.b0aba788.svg" alt="" />
                    <h4>Plan with confidence</h4>
                    <span>Stay one step ahead with flexible flight tickets, free hotel and car cancellation and the cleanest rooms around.</span>
                </div>
                <div className="col-md-4">
                    <img src="https://js.skyscnr.com/sttc/blackbird/static/media/third_pillar.f5197051.svg" className="img-fluid" alt="" />
                    <h4>Keep it simple</h4>
                    <span>No hidden fees. No hidden charges. No funny business. With us, you’ll always know exactly where your money goes. So you can relax before your trip even begins.</span>
                </div>
            </div>
        </div>
    );
};

export default About;