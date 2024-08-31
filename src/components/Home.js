import React from 'react';
import profilePic from './profile.jpg'

const Home = () => {
    return (
        <section id="home" className="section">
            <div className="container">
            <img src={profilePic} alt="Profile Picture" className="profile-pic" />
                <h1>Welcome to My Portfolio</h1>
                <p>I am a recent graduate from UMass Boston with a Bachelor's degree in Information Technology,
                        currently pursuing a Full Stack Developer course at BloomTech to expand my skills in web development.
                        I am passionate about leveraging technology to solve problems and create innovative solutions.</p>

                        <p>My skills include HTML, CSS, JavaScript, React, and GitHub.
                        I am eager to apply my knowledge and continue learning in the dynamic field of software development</p>
            </div>
        </section>
    );
};

export default Home;