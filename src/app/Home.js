import React from 'react'
import PropTypes from 'prop-types';
import ProjectCardList from "./layout/content/ProjectCardList";

import {translate} from "react-i18next";
import BodySocialMediaHub from "./layout/content/BodySocialMediaHub";

class Home extends React.Component {
    static propTypes = {
        locale: PropTypes.string
    };

    render() {
        return <div className={'home-content'}>
            <div className={"bgimg"}>
                <div className={"has-text-centered content-home-page"}>
                    <h1 className="home-title">{'{Maxime JENNY.}'}</h1>
                    <div>
                        <hr className="home-line"/>
                        <p className="home-desc subtitle">
                            { this.props.t('body.main-description', { framework: "react-i18next" }) }
                        </p>
                        <BodySocialMediaHub/>
                    </div>
                </div>
            </div>

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
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            My passions / hobbies
                        </h1>
                        <h2 className="subtitle">
                            The list of some thing that I like to do.
                        </h2>
                    </div>
                </div>
            </section>
            <div className={'column is-multiline centered'}>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-info">
                                    <p className="title">Vertical...</p>
                                    <p className="subtitle">Top tile</p>
                                </article>
                                <article className="tile is-child notification is-info">
                                    <p className="title">...tiles</p>
                                    <p className="subtitle">Bottom tile</p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title">Middle tile</p>
                                    <p className="subtitle">With an image</p>
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png"/>
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <p className="title">Wide tile</p>
                                <p className="subtitle">Aligned with the right tile</p>
                                <div className="content">
                                    Content
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <div className="content">
                                <p className="title">Tall tile</p>
                                <p className="subtitle">With even more content</p>
                                <div className="content">
                                    Content
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default translate('common')(Home);