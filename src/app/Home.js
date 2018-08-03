import React from 'react'

import ProjectCard from './layout/content/ProjectCard'

const Home = () => (
    <div className={'home-content'}>
        <div className={"columns is-multiline project-columns"}>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>
);
export default Home