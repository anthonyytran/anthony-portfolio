import React from 'react';
import LogoA from '../../assets/images/A-logos_yellow.png';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm </h1>
                <img src={LogoA} alt="developer" />
            </div>
        </div>
    );
}

export default Home;

