import React from 'react'

import { translate } from 'react-i18next';
import i18n from 'i18next';

class Footer extends React.Component {
    render() {
        return <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>{ this.props.t('footer.madein', { framework: "react-i18next" }) } <a href={'https://reactjs.org'}>ReactJS</a></p>
                </div>
            </div>
        </footer>
    }
}

export default translate('common')(Footer);