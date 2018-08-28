import React from 'react';
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    DateField,
    TextField,
    EditButton,
    DisabledInput,
    TextInput,
    LongTextInput,
    DateInput
} from 'react-admin';
import Icon from '@material-ui/icons/Message';

export const LeadsIcon = Icon;

export const LeadsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="email"/>
            <TextField source="message"/>
            <EditButton basePath="/leads/api"/>
        </Datagrid>
    </List>
);

const LeadName = ({record}) => {
    return <span>Lead {record ? `"${record.name}"` : ''}</span>;
};

export const LeadsEdit = (props) => (
    <Edit title={<LeadName/>} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <LongTextInput source="message"/>
        </SimpleForm>
    </Edit>
);

export const LeadsCreate = (props) => (
    <Create title="Create a Lead" {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <LongTextInput source="message"/>
        </SimpleForm>
    </Create>
);
