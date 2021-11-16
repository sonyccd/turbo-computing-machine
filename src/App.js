// in src/App.js
import * as React from "react";
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import { LocalPostOfficeTwoTone, People  } from "@material-ui/icons";
import dashboard from "./dashboard";
import authProvider from "./authProvider";


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => <Admin dashboard={dashboard} authProvider={authProvider} dataProvider={dataProvider} >
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={LocalPostOfficeTwoTone}/>
  <Resource name="users" list={UserList} icon={People}/>
</Admin>;

export default App;