import React from 'react';

class ProjectCard extends React.Component {
    render() {
        return (
            <div className={"is-one-third column"}>
                <div className={"card-image"}>
                    <figure className={"image is-4by3"}>
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className={"card-content"}>
                    <div className={"media"}>
                        {/*<div className={"media-left"}>*/}
                            {/*<figure className="image is-48x48">*/}
                                {/*<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>*/}
                            {/*</figure>*/}
                        {/*</div>*/}
                        <div className={"media-content"}>
                            <p className={"title is-4"}>Project Name</p>
                            <p className={"subtitle is-6"}>Epitech Project or Web@cadémie Project</p>
                        </div>
                    </div>
                    <p className={"content"}>
                        Some description of the project. <a>@maxime_jenny</a>. <a href="#">#css</a><a href="#">#responsive</a>
                        <br/>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </p>
                </div>
            </div>
        );
    }
}

export default ProjectCard