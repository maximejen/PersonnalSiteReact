import React from 'react';
import PropTypes from 'prop-types';

import {translate} from "react-i18next";
import ScrollToTopOnMount from "../utils/ScrollToTopOnMount";
import {getCorrectTranslatedString} from "../../../utils/functions";

import bulmaCarousel from 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js'

class ProjectPageRenderer extends React.Component {
    static propTypes = {
        locale: PropTypes.string,
        project: PropTypes.object
    };

    static defaultProps = {
        locale: 'en'
    };

    componentDidMount() {
        bulmaCarousel.attach();
    }

    render() {
        return <div className={''}>
            <ScrollToTopOnMount/>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {this.props.project.name}
                        </h1>
                        <h2 className="subtitle">
                            {getCorrectTranslatedString(this.props.locale, this.props.project.description)}
                        </h2>
                    </div>
                </div>
            </section>
            <div className={'columns'} style={{padding: "5rem"}}>
                <div className={'column is-5'}>
                    <div
                        className='carousel carousel-animated carousel-animate-slide'>
                        <div className='carousel-container'>
                            <div className='carousel-item has-background is-active'>
                                <img className="is-background"
                                     src="https://wikiki.github.io/images/merry-christmas.jpg"
                                     alt="" width="640" height="310"/>
                            </div>
                            <div className='carousel-item has-background'>
                                <img className="is-background"
                                     src="https://wikiki.github.io/images/singer.jpg"
                                     alt="" width="640" height="310"/>
                            </div>
                            <div
                                className='carousel-item has-background'>
                                <img className="is-background"
                                     src="https://wikiki.github.io/images/sushi.jpg"
                                     alt="" width="640" height="310"/>
                            </div>
                            <div className='carousel-item has-background'>
                                <img className="is-background"
                                     src="https://wikiki.github.io/images/life.jpg"
                                     alt="" width="640" height="310"/>
                            </div>
                        </div>
                        <div className="carousel-navigation is-overlay">
                            <div className="carousel-nav-left">
                                <i className="fa fa-chevron-left" aria-hidden="true"/>
                            </div>
                            <div className="carousel-nav-right">
                                <i className="fa fa-chevron-right" aria-hidden="true"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-divider-vertical is-1"/>
                <div className={'is-6'}>
                    <h1 className={'title'}>{this.props.t('body.project.description', { framework: "react-i18next" })}:</h1>
                    <p>
                        {getCorrectTranslatedString(this.props.locale, this.props.project.complete_description)}
                    </p>
                </div>
                <script type="text/javascript" src="/node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js"/>
            </div>
        </div>
    }
}

export default translate('common')(ProjectPageRenderer);