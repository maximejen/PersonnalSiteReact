import React from 'react';
import {Admin, Resource} from 'react-admin';
import buildPrismaProvider from '../utils/adaptator/index';
// import buildPrismaProvider from '../utils/ra-data-prisma/src/index';
import { createMuiTheme } from '@material-ui/core/styles';

import primary from '@material-ui/core/colors/deepOrange';
import secondary from '@material-ui/core/colors/orange';

// Show
import {AdminProjectList} from "./content/admin/project/AdminProjectList.js";
import {AdminTechnologyList} from "./content/admin/technology/AdminTechnologyList.js";
import {AdminTechnologyTypeList} from "./content/admin/technology_type/AdminTechnologyTypeList.js";
import {AdminTranslatedStringList} from "./content/admin/translated_string/AdminTranslatedStringList.js";
import {AdminImageList} from "./content/admin/image/AdminImageList";

// Create
import {AdminTranslatedStringCreate} from "./content/admin/translated_string/AdminTranslatedStringCreate";
import {AdminTechnologyCreate} from "./content/admin/technology/AdminTechnologyCreate";
import {AdminTechnologyTypeCreate} from "./content/admin/technology_type/AdminTechnologyTypeCreate";
import {AdminImageCreate} from "./content/admin/image/AdminImageCreate";
import {AdminProjectCreate} from "./content/admin/project/AdminProjectCreate";

// Edit
import {AdminTranslatedStringEdit} from "./content/admin/translated_string/AdminTranslatedStringEdit";
import {AdminTechnologyTypeEdit} from "./content/admin/technology_type/AdminTechnologyTypeEdit";
import {AdminTechnologyEdit} from "./content/admin/technology/AdminTechnologyEdit";
import {AdminImageEdit} from "./content/admin/image/AdminImageEdit";
import {AdminProjectEdit} from "./content/admin/project/AdminProjectEdit";

// Show
import {AdminTranslatedStringShow} from "./content/admin/translated_string/AdminTranslatedStringShow";
import {AdminTechnologyTypeShow} from "./content/admin/technology_type/AdminTechnologyTypeShow";
import {AdminTechnologyShow} from "./content/admin/technology/AdminTechnologyShow";
import {AdminImageShow} from "./content/admin/image/AdminImageShow";
import {AdminProjectShow} from "./content/admin/project/AdminProjectShow";

// Icons
import ImageIcon from '@material-ui/icons/Image';
import ProjectIcon from '@material-ui/icons/Work';
import TranslatedStringIcon from '@material-ui/icons/Translate';
import TechnologyIcon from '@material-ui/icons/Extension';

class AppAdmin extends React.Component {
    constructor() {
        super();
        this.state = {dataProvider: null};
    }

    componentDidMount() {
        buildPrismaProvider({
            clientOptions: {
                uri: "http://localhost:4466"
            }
        }).then(dataProvider => this.setState({dataProvider}));
    }

    render() {
        const {dataProvider} = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        const theme = createMuiTheme({
            palette: {
                primary: primary,
                secondary: secondary,
            },
        });

        return (
            <div>
                <Admin theme={theme} dataProvider={dataProvider}>
                    <Resource name="Project" list={AdminProjectList}
                              icon={ProjectIcon}
                              create={AdminProjectCreate}
                              edit={AdminProjectEdit}
                              show={AdminProjectShow}
                    />
                    <Resource name="Technology" list={AdminTechnologyList}
                              icon={TechnologyIcon}
                              create={AdminTechnologyCreate}
                              edit={AdminTechnologyEdit}
                              show={AdminTechnologyShow}
                    />
                    <Resource name="TechnologyType"
                              list={AdminTechnologyTypeList}
                              create={AdminTechnologyTypeCreate}
                              edit={AdminTechnologyTypeEdit}
                              show={AdminTechnologyTypeShow}
                    />
                    <Resource name="TranslatedString"
                              list={AdminTranslatedStringList}
                              icon={TranslatedStringIcon}
                              create={AdminTranslatedStringCreate}
                              edit={AdminTranslatedStringEdit}
                              show={AdminTranslatedStringShow}
                    />
                    <Resource name="Image"
                              list={AdminImageList}
                              icon={ImageIcon}
                              create={AdminImageCreate}
                              edit={AdminImageEdit}
                              show={AdminImageShow}
                    />
                </Admin>
            </div>
        );
    }
}

export default AppAdmin;