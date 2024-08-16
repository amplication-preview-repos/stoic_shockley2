import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <DateTimeInput label="givenAt" source="givenAt" />
        <TextInput label="givenBy" source="givenBy" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="receivedBy" source="receivedBy" />
      </SimpleForm>
    </Edit>
  );
};
