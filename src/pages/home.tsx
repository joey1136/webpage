import React from "react";
import styled from "styled-components";
import { Button, Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useHistory } from "react-router-dom";

const Root = styled.div`
  width: 100vw;
  height: 90vh;
  top: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const Content = styled.div``;

const Introduction = styled.div``;

const Name = styled.div``;

export const HomePage: React.FunctionComponent = () => {
  const history = useHistory();

  return (
    <Root>
      <Content>
        <Card>
          <Image src="../logo512.png" circular />
          <Card.Content>
            <Card.Header>
              <Name>Joey Kwok</Name>
            </Card.Header>
            <Card.Meta>
              <Introduction>IT Fresh Grad Student</Introduction>
            </Card.Meta>
            <Card.Description>Hello! Welcome to my page</Card.Description>
          </Card.Content>
          <Card.Content>
            <Button onClick={() => history.push(`/profile`)}>Profile</Button>
          </Card.Content>
        </Card>
      </Content>
    </Root>
  );
};
