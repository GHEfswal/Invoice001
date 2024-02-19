// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/01_header/Header";
import Container from "./components/00_container/Container";
import Client_Info from "./components/02_client_info/Client_Info";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
      <Client_Info />
    </Container>
  );
}

export default App;
