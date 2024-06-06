import React from 'react';
import Navbar from '../common/navbar/navbar';
import './homepage.css';

const HomePage = (props) => {
    return (
        <div>
            <Navbar page="home" />
            <div className="homepage-main-container">
                <div className="welcome-content">
                    <h1>Welcome to the Image Generator App</h1>
                    <p>
                        Create stunning images instantly with our powerful and easy-to-use image generator. 
                        Simply enter a description, and watch the magic happen. Ready to unleash your creativity?
                    </p>
                    <button onClick={() => window.location.href='/image-Generator'}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
