import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ChatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" source="message" />
        <TextInput label="sessionId" source="sessionId" />
      </SimpleForm>
    </Edit>
  );
};
