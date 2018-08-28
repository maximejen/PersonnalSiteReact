import React from 'react';
import { Show, RichTextField, TextField, DateField, SimpleShowLayout } from 'react-admin';

export const AdminTranslatedStringShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="en" />
            <TextField source="fr" />
        </SimpleShowLayout>
    </Show>
);