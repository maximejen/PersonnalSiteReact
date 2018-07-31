import React from 'react';
import PropTypes from "prop-types";
import i18n from "i18next";

class NavLanguagePicker extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    static propTypes = {
        locale: PropTypes.string,
        actualLocale: PropTypes.string,
        onClick: PropTypes.func
    };

    handleClick() {
        this.props.onClick(this.props.locale);
    }

    render() {
        let toRender;

        if (this.props.locale === this.props.actualLocale)
            toRender = <button className={"navbar-item activated_language lang_" + this.props.locale}
                               onClick={this.handleClick}>
                <img src={this.props.locale + ".png"}/>
            </button>
        else
            toRender = <button className={"navbar-item lang_" + this.props.locale} onClick={this.handleClick}>
                <img src={this.props.locale + ".png"}/>
            </button>
        return toRender;
    }
}

export default NavLanguagePicker
