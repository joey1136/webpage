import { Form, Message } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { useState } from "react";
import React from "react";

export const Contact: React.FunctionComponent = () => {
  const Root = styled.div`
    padding-top: 8vh;
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ContactBox = styled.div`
    width: 50%;
  `;

  const [name, setName] = useState<string | undefined>(undefined);
  const [subject, setSubject] = useState<string | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Root>
      <ContactBox>
        <Form
          onSubmit={() => {
            setIsSubmitted(true);
            window.open(
              `mailto:kwokjoey2000@gmail.com?subject=Hello i am ${name}&?body=${subject}asd`
            );
          }}
        >
          <Form.Input
            label="May I know your name?"
            value={name}
            name="name"
            placeholder="Name"
            onChange={(evt, data): void => setName(data.value)}
          />
          <Form.TextArea
            label="Content"
            placeholder="Any thing that you want to ask me..."
            value={subject}
            name="subject"
            onChange={(event) => {
              setSubject(event.target.value);
              setIsSubmitted(false);
            }}
          />
          <Form.Button content="Submit" />
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, subject }, null, 2)}</pre>
        {isSubmitted && <Message positive>Thank you for your message!</Message>}
      </ContactBox>
    </Root>
  );
};
