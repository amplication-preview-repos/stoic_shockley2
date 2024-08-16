import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="givenAt" source="givenAt" />
        <TextField label="givenBy" source="givenBy" />
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <TextField label="receivedBy" source="receivedBy" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
