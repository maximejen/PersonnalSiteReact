import React from 'react'

import { NavLink } from 'react-router-dom'
import NavBurger from "./header/NavBurger";
import NavItem from "./header/NavItem";

import '../../styles/App.css';

import { translate } from 'react-i18next';
import i18n from 'i18next';
import NavSocialMediaHub from "./header/NavSocialMediaHub";
import NavLanguagePickerHub from "./header/NavLanguagePickerHub";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isBurgerMode: false,
            i18n: i18n,
            locale: i18n.language
        };

        this.changeLocale = this.changeLocale.bind(this);
    }

    toggleNav = () => {
        this.setState(prevState => ({
            isBurgerMode: !prevState.isBurgerMode
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
                    <NavBurger onClick={this.toggleNav} isActive={this.state.isBurgerMode}/>
                </div>
                <div className={this.state.isBurgerMode ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-start">
                        <NavItem redirectTo={"/blog"} text={ this.props.t('nav.projects', { framework: "react-i18next" }) } iconClass={"fas fa-code"}/>
                    </div>
                    <div className="navbar-end">
                        <NavSocialMediaHub isActive={this.state.isBurgerMode}/>
                        <NavLanguagePickerHub actualLocale={this.state.locale} onClick={this.changeLocale} isBurgerMode={this.state.isBurgerMode}/>
                    </div>
                </div>
            </nav>
        )
    }
}

export default translate('common')(Header);