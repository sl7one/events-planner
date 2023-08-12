"use client"; // only needed if you choose App Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import {EventsList} from '../EventsList/EventsList';
import {dataProvider} from './dataProvider'



const AdminApp = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="events"
        list={EventsList}
        edit={EditGuesser}
        recordRepresentation="name"
      />
    </Admin>
  );
};

export default AdminApp;
