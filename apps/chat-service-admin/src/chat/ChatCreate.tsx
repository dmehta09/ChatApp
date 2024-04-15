import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" source="message" />
        <TextInput label="sessionId" source="sessionId" />
      </SimpleForm>
    </Create>
  );
};
