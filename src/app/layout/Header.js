import React from 'react'

import { NavLink } from 'react-router-dom'
import NavBurger from "./header/NavBurger";
import NavItem from "./header/NavItem";

import '../../styles/App.css';

import { translate } from 'react-i18next';
import i18n from 'i18next';
import NavLanguagePicker from "./header/NavLanguagePicker";
import NavSocialMedia from "./header/NavSocialMedia";

class Header extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            i18n: i18n,
            locale: i18n.language
        };

        this.changeLocale = this.changeLocale.bind(this);
    }

    toggleNav = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    };

    changeLocale(newLocale) {
        this.state.i18n.changeLanguage(newLocale);
        this.setState(prevState => ({
            locale: newLocale
        }));
    };

    render() {
        return (
            <nav className="navbar is-dark is-fixed-top is-transparent"
                 aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink
                        className="navbar-item"
                        to="/"
                        activeClassName="is-active">
                        <img
                            style={{
                                borderTopLeftRadius: '50%',
                                borderTopRightRadius: '50%',
                                borderBottomLeftRadius: '50%',
                                borderBottomRightRadius: '50%',
                                marginRight: 15
                            }}
                            src="logo.svg"
                            className="App-logo"
                            width="50px"
                            alt="logo"
                        />
                        <span>{'{Maxime JENNY.}'}</span>
                    </NavLink>
                    <NavBurger onClick={this.toggleNav}/>
                </div>
                <div className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-start">
                        <NavItem redirectTo={"/blog"} text={ this.props.t('nav.projects', { framework: "react-i18next" }) } iconClass={"fas fa-code"}/>
                        {/*<a className="navbar-item">*/}
                            {/*<span className="icon" style={{marginRight: 5}}>*/}
                                {/*<i className="fab fa-lg fa-medium"></i>*/}
                            {/*</span>*/}
                            {/*Medium*/}
                        {/*</a>*/}
                        {/*<div className="navbar-item has-dropdown is-hoverable">*/}
                            {/*<a className="navbar-link">*/}
                                {/*Projects*/}
                            {/*</a>*/}
                            {/*<div className="navbar-dropdown">*/}
                                {/*<a className="navbar-item">*/}
                                    {/*Overview*/}
                                {/*</a>*/}
                                {/*<hr className="navbar-divider"/>*/}
                                {/*<a className="navbar-item">*/}
                                    {/*This Site*/}
                                {/*</a>*/}
                                {/*<a className="navbar-item">*/}
                                    {/*Angular The React Way*/}
                                {/*</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="navbar-end">
                        <NavSocialMedia href={"https://www.github.com/maximejen"} color={'#FFFFFF'} target={'_blank'} iconName={"github"}/>
                        <NavSocialMedia href={"https://www.twitter.com/maxime_jenny/"} color={'#0084FF'} target={'_blank'} iconName={"twitter"}/>
                        <NavSocialMedia href={"https://www.linkedin.com/in/maxime-jenny/"} color={'#0077B5'} target={'_blank'} iconName={"linkedin"}/>
                        <NavLanguagePicker locale={"fr"} actualLocale={this.state.locale} onClick={this.changeLocale}/>
                        <NavLanguagePicker locale={"en"} actualLocale={this.state.locale} onClick={this.changeLocale}/>
                    </div>
                </div>
            </nav>
        )
    }
}

export default translate('common')(Header);