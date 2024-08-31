import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2>About Me</h2>
                <p>I am a recent graduate from UMass Boston with a Bachelor's degree in Information Technology, where I developed a strong foundation in computer science, programming, and IT fundamentals. Currently, I am actively pursuing a Full Stack Developer course at BloomTech to enhance my skills in web development and broaden my technical expertise.</p>
                <p>My academic journey has equipped me with knowledge in areas such as software engineering, database management, and system analysis. I am particularly passionate about leveraging technology to solve complex problems and improve user experiences through innovative solutions.</p>
                
                <h3>Skills</h3>
                <ul className="skills-list">
                    <li><strong>Programming Languages:</strong> Proficient in HTML, CSS, JavaScript.</li>
                    <li><strong>Front-end Development:</strong> Experience with ReactJS, Bootstrap.</li>
                    <li><strong>Back-end Development:</strong> Familiar with Node.js, Express.</li>
                    <li><strong>Version Control:</strong> Git, GitHub.</li>
                    <li><strong>Problem-solving:</strong> Strong analytical and problem-solving skills acquired through coursework and personal projects.</li>
                    <li><strong>Communication:</strong> Effective communicator with a collaborative approach to teamwork and project management.</li>
                </ul>
            </div>
        </section>
    );
};

export default About;