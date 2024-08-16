import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const FeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <DateTimeInput label="givenAt" source="givenAt" />
        <TextInput label="givenBy" source="givenBy" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="receivedBy" source="receivedBy" />
      </SimpleForm>
    </Create>
  );
};
