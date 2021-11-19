// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import { LocalPostOfficeTwoTone, People } from "@material-ui/icons";
import dashboard from "./dashboard";
import authProvider from "./authProvider";
import LoginPage from "./loginPage";
import { withAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { theme } from "./theme";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () =>
  <Admin dashboard={dashboard} dataProvider={dataProvider} theme={theme}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={LocalPostOfficeTwoTone} />
    <Resource name="users" list={UserList} icon={People} />
  </Admin>;

export default App;