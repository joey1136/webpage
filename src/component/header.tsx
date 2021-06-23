import { Image, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  const Root = styled.header`
    height: 8vh;
    width: 100vw;
    align-items: center;
    position: absolute;
  `;
  const Icon = styled.div`
    width: 10vw;
    left: 10px;
    bottom: 10px;
    position: absolute;
  `;
  const MenuComponent = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
  `;
  const history = useHistory();

  return (
    <Root>
      <Icon>
        <Image src="../logo512.png" circular size="small" />
      </Icon>
      <MenuComponent>
        <Menu>
          <Menu.Item name="about" onClick={() => history.push(`/profile`)}>
            About
          </Menu.Item>
          <Menu.Item name="projects" onClick={() => alert(123)}>
            Projects
          </Menu.Item>
          <Menu.Item name="Game" onClick={() => alert("developing")}>
            Game Corner
          </Menu.Item>
          <Menu.Item name="contact" onClick={() => history.push(`/contact`)}>
            Contact
          </Menu.Item>
        </Menu>
      </MenuComponent>
    </Root>
  );
};

export default Header;
