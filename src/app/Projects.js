import React from 'react'

import ProjectCardList from "./layout/content/ProjectCardList";
import PropTypes from "prop-types";

class Projects extends React.Component {
    static propTypes = {
        locale: PropTypes.string
    };

    render() {
        return <div className={'projects-content'}>
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
                <ProjectCardList locale={this.props.locale}/>
            </div>
        </div>;
    }
}

export default Projects