import React from 'react'

import {
	List,
	DateField,
	TextField,
	Filter,
	SearchInput,
	Edit,
	CardActions,
	ListButton,
	TabbedForm,
	FormTab,
	required,
	Datagrid,
	Create,
	SimpleForm,
	TextInput
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

const EditActions = ({ basePath, data }) => (
	<CardActions>
		<ListButton basePath={basePath} />
		<DuplicateButton basePath={basePath} record={data} />
	</CardActions>
)

const CreateActions = ({ basePath }) => (
	<CardActions>
		<ListButton basePath={basePath} />
	</CardActions>
)

export const ReportsList = props => (
	<List
		{...props}
		filters={<Filters />}
		title='Reports List'
	>
		<Datagrid
			rowClick='edit'
		>
			<TextField
				source={'placeName'}
			/>
			<TextField
				source={'placeStreet'}
			/>
			<TextField
				source={'estimatedButts'}
			/>
			<DateField source='createdAt' />
		</Datagrid>
	</List>
)

export const ReportsCreate = (props) => (
	<Create
		{...props}
		title='User Create'
		actions={<CreateActions />}
	>
		<SimpleForm>
			<TextInput
				source={'placeName'}
				validate={required()}
			/>
			<TextInput
				source={'placeStreet'}
				validate={required()}
			/>
			<TextInput
				source={'estimatedButts'}
				validate={required()}
			/>
		</SimpleForm>
	</Create>
)

export const ReportsEdit = (props) => (
	<Edit
		{...props}
		title='Reports Edit'
		actions={<EditActions />}
	>
		<TabbedForm redirect={false}>
			<FormTab replace label='summary'>
				<TextField source='id' />
				<TextField
					source={'placeName'}
					validate={required()}
				/>
				<TextField
					source={'placeStreet'}
					validate={required()}
				/>
				<TextField
					source={'estimatedButts'}
					validate={required()}
				/>
				<DateField source='createdAt' showTime />
			</FormTab>
		</TabbedForm>
	</Edit>
)
