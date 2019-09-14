import React from 'react'
import { Admin, Resource } from 'react-admin'
import { authClient } from 'ra-data-feathers'
import englishMessages from 'ra-language-english'

import Person from '@material-ui/icons/Person'

import feathersRestClient from './client/feathersRestClient'
import createRealtimeSaga from './redux/sagas/createRealtimeSaga'
import domainMessages from './i18n'
import { defaultTheme } from './themes'

import dataProvider from './dataProvider'

import { AdminCreate, AdminEdit, AdminList } from './models/admins'

const authClientOptions = {
  storageKey: 'feathers-jwt', // The key in localStorage used to store the authentication token
  authenticate: { // Options included in calls to Feathers client.authenticate
    strategy: 'local' // The authentication strategy Feathers should use
  },
  permissionsKey: 'permissions', // The key in localStorage used to store permissions from decoded JWT
  permissionsField: 'roles', // The key in the decoded JWT containing the user's role
  passwordField: 'password', // The key used to provide the password to Feathers client.authenticate
  usernameField: 'email', // The key used to provide the username to Feathers client.authenticate
  redirectTo: '/login' // Redirect to this path if an AUTH_CHECK fails. Uses the react-admin default of '/login' if omitted.
}

const realTimeSaga = createRealtimeSaga(dataProvider)

const messages = {
  en: {
    ...englishMessages,
    ...domainMessages.en
  }
}

const i18nProvider = locale => messages[locale]

const App = () =>
  <Admin
    title='Butt buster: Admin panel'
    dataProvider={dataProvider}
    authProvider={authClient(feathersRestClient, authClientOptions)}
    customSagas={[realTimeSaga]}
    locale='en'
    i18nProvider={i18nProvider}
    theme={defaultTheme}
  >
    <Resource
      name={'admins'}
      icon={Person}
      list={AdminList}
      create={AdminCreate}
      edit={AdminEdit}
    />
  </Admin>

export default App
