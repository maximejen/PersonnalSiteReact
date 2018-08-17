import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Router from './layout/Router'

// Apollo Configuration for Wrapping
import {
    ApolloProvider,
} from 'react-apollo';

import ApolloClient from "apollo-boost";
import i18n from "i18next";

const client = new ApolloClient({
    uri: "http://localhost:4000/"
});

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            i18n: i18n,
            locale: i18n.language
        };

        this.changeLocale = this.changeLocale.bind(this);
    }

    static propTypes = {
        children: PropTypes.func
    };

    changeLocale(newLocale) {
        this.setState({locale: newLocale});
    }

    render() {
        return <ApolloProvider client={client}>
            <Site>
                <Helmet
                    title="Maxime JENNY"
                    meta={[
                        {
                            name: 'description',
                            content: 'Maxime JENNY\'s personnal website'
                        },
                        {
                            name: 'keywords',
                            content: 'resume, blog, porfolio, tutorials, maxime jenny'
                        },
                    ]}
                    script={[
                        {'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
                    ]}
                    link={[
                        {
                            'rel': 'stylesheet',
                            'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
                        }
                    ]}
                />
                <Header onChangeLocale={this.changeLocale}/>
                <Content>
                    <Router/>
                </Content>
                <Footer/>
            </Site>
        </ApolloProvider>
    }
}

export default Layout