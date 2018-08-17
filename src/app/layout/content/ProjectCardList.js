import React from 'react';
import PropTypes from 'prop-types';
import {Query} from "react-apollo";
import gql from "graphql-tag";

import ProjectCard from "./ProjectCard";

import { getCorrectTranslatedString } from '../../utils/functions'

const GET_PROJECTS = gql`
    query {
        projects {
            name
            description {
                ...descriptionLanguages
            }
        }
    }
    
    fragment descriptionLanguages on TranslatedString {
        fr
        en
    }
`;

class ProjectCardList extends React.Component {
    static propTypes = {
        locale: PropTypes.string,
        numberCard: PropTypes.number
    };

    static defaultProps = {
        locale: 'en',
        numberCards: 3
    };

	render() {
	    let rendered = 0;

		return <Query query={GET_PROJECTS}>
			{({loading, error, data}) => {
				if (loading)
					return <p>Loading...</p>;
				if (error)
					return <p>Error : {error.message}</p>;


				return data.projects.map(({name, description}) => {
				    if (rendered < this.props.numberCards || this.props.numberCards === 0) {
				        rendered += 1;
                        return <ProjectCard name={name} description={getCorrectTranslatedString(this.props.locale, description)}/>
                    }
				});
			}}
		</Query>
	}
}

export default ProjectCardList