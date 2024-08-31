import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Projects</h2>
                {/* Example Project */}
                <div className="project">
                    <h3>Project Title</h3>
                    <p>                        As a student of Full Stack Developer course at BloomTech, I am currently working on a hypothetical project to demonstrate my skills in web development.
                        Although this is not a completed project, my role involves designing and implementing the front-end and back-end architecture using technologies such as HTML, CSS, JavaScript, Node.js, and React.
                        The expected outcomes include gaining practical experience in full-stack development and creating a responsive web application that could be adapted to real-world scenarios.</p>
                    <a href="#" className="btn">View Project</a> {/* Replace '#' with project link */}
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    );
};

export default Projects;