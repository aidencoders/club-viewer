import styled from "@emotion/styled";

const WrapperHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 1.5em 0;
`;

const Content = styled.p`
  font-size: 2em;

  color: #ff7900;
`;

function Header() {
  return (
    <WrapperHeader>
      <Content>CLUB-VIEWER</Content>
    </WrapperHeader>
  );
}

export default Header;
