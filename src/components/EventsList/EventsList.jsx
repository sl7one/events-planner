import { List, Datagrid, TextField, EmailField } from "react-admin";

export const EventsList = () => {
  

  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="date" />
        <TextField source="location" />
        <TextField source="title" />
        <TextField source="description" />
        <TextField source="priority.label" />
        <TextField source="picture" />

        {/* <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" /> */}
      </Datagrid>
    </List>
  );
};
