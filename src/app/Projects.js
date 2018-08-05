import React from 'react'

import ProjectCard from './layout/content/ProjectCard'

const Projects = () => (
    <div className={'projects-content'}>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        My projects
                    </h1>
                    <h2 className="subtitle">
                        You'll find here a non exhaustive list of my projects.
                    </h2>
                </div>
            </div>
        </section>
        <div className={"columns is-multiline project-columns"}>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>
);

export default Projects