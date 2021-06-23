import styled from "styled-components";

const Footer: React.FunctionComponent = () => {
  const Root = styled.footer`
    height: 5vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    background: #faebd7;
  `;
  const Copyright = styled.div``;
  return (
    <Root>
      <Copyright>This website designed by Joey Kwok @2021</Copyright>
    </Root>
  );
};

export default Footer;
