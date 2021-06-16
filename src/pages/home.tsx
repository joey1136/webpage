import React from "react";
import styled from "styled-components";
import { Button, Card, Image } from "semantic-ui-react";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div``;

const Introduction = styled.div``;

const Name = styled.div``;

export const HomePage: React.FunctionComponent = () => {
  return (
    <Root>
      <Content>
        <Card>
          <Image src="../public/logo192.png" />
          <Card.Content>
            <Card.Header>
              <Name>Joey Kwok</Name>
            </Card.Header>
            <Card.Meta>
              <Introduction>Hello This is Home Page</Introduction>
            </Card.Meta>
            <Card.Description>IT Fresh Grad Student</Card.Description>
          </Card.Content>
          <Card.Content>
            <Button>Profile</Button>
          </Card.Content>
        </Card>
      </Content>
    </Root>
  );
};
