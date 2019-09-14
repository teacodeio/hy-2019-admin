import React from 'react'

import {
  List,
  DateField,
  TextField,
  Filter,
  SearchInput,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  CardActions,
  ListButton,
  TabbedForm,
  FormTab,
  required,
  Datagrid
} from 'react-admin'
import DateFilters from '../../elements/DateFilters'
import DuplicateButton from '../../elements/DuplicateButton'

export const Filters = (props) => (
  <Filter {...props}>
    <SearchInput
      label='Email'
      source={`email.$regex`}
      alwaysOn
    />

    {DateFilters}
  </Filter>
)

const CreateActions = ({ basePath }) => (
  <CardActions>
    <ListButton basePath={basePath} />
  </CardActions>
)

const EditActions = ({ basePath, data }) => (
  <CardActions>
    <ListButton basePath={basePath} />
    <DuplicateButton basePath={basePath} record={data} />
  </CardActions>
)

export const UserList = props => (
  <List
    {...props}
    filters={<Filters />}
  >
    <Datagrid
      rowClick='edit'
    >
      <TextField source='email' />
      <DateField source='createdAt' />
      <DateField source='updatedAt' />
    </Datagrid>
  </List>
)

export const UserCreate = (props) => (
  <Create
    {...props}
    actions={<CreateActions />}
  >
    <SimpleForm>
      <TextInput
        source={'email'}
        type='email'
        validate={required()}
      />
      <TextInput
        source={'password'}
        type='password'
        validate={required()}
      />
    </SimpleForm>
  </Create>
)

export const UserEdit = (props) => (
  <Edit
    {...props}
    actions={<EditActions />}
  >
    <TabbedForm redirect={false}>
      <FormTab replace label='summary'>
        <TextField source='id' />
        <TextInput
          source={'email'}
          type='email'
          validate={required()}
        />
        <TextInput
          source={'password'}
          type='password'
        />
        <DateField source='createdAt' showTime />
        <DateField source='updatedAt' showTime />
      </FormTab>
    </TabbedForm>
  </Edit>
)
