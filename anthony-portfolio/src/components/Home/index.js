import React from 'react';
import LogoA from '../../assets/images/A-logos_white.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoA} alt="developer" />
                nthony,
                <br />
                An aspiring Software Engineer.
                </h1>
                <h2>Frontend Developer / Student / Human</h2>
            </div>
        </div>
    );
}

export default Home;

