import styled from "styled-components";
import Capak from "./Capak";

function App() {
  return (
    <>
    <Header>Cápák</Header>
    <Main>
      <h1>Cápák és ráják</h1>
      <Capak />
    </Main>
    <Footer>
    &copy; Cápák és Ráják alapítvány
    </Footer>
    </>
  );
}

export default App;

const Header = styled.header`
    height: 70px;
    background-color: rgb(55, 50, 209);
    color: white;
    font-size: 30px;
    padding: 20px;
`
const Footer = styled.footer`
    height: 58px;
    background-color: rgb(55, 50, 209);
    color: white;
    font-size: 18px;
    padding: 15px;
`
const Main = styled.main`
    padding: 15px;
    background-color: rgb(214, 244, 245);
    height: calc(100vh - 58px - 58px);
    overflow: auto;
`
