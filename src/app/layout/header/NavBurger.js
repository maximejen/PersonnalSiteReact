import React from 'react';
import PropTypes from 'prop-types';

class NavBurger extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
    };

    render() {
        return <div className="navbar-burger burger"
                    data-target="navbarExampleTransparentExample"
                    onClick={this.props.onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>;
    }
}

export default NavBurger