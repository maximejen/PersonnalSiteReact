import React from 'react'

import { NavLink } from 'react-router-dom'
import MenuBurger from "./header/MenuBurger";
import MenuItem from "./header/MenuItem";

class Header extends React.Component {
    state = {
        isActive: false,
    }

    toggleNav = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    }

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
                            width="50px"
                            alt="logo"
                        />
                        <span>{'{Maxime JENNY.}'}</span>
                    </NavLink>
                    <MenuBurger onClick={this.toggleNav}/>
                </div>
                <div className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-start">
                        <MenuItem redirectTo={"/blog"} text={"Projects"} iconClass={"fas fa-code"}/>
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
                        <a className="navbar-item" href="https://github.com/maximejen" target='_blank'>
                            <span className="icon">
                                <i className="fab fa-lg fa-github"></i>
                            </span>
                        </a>
                        <a className="navbar-item" href="https://twitter.com/maxime_jenny" target='_blank'>
                            <span className="icon has-text-info" style={{color: '#0084FF'}}>
                                <i className="fab fa-lg fa-twitter"></i>
                            </span>
                        </a>
                        <a className="navbar-item" href="https://www.linkedin.com/in/maxime-jenny/" target='_blank'>
                            <span className="icon" style={{color: '#0077B5'}}>
                                <i className="fab fa-lg fa-linkedin"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header