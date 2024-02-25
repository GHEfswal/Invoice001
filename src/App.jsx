// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/01_header/Header";
import Container from "./components/00_container/Container";
import Client_Info from "./components/02_client_info/Client_Info";
import Services from "./components/03_services/Services";
import Amount_Due from "./components/04_amount_due/Amount_Due";
import Footer from "./components/05_footer/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
      <Client_Info />
      <Services />
      <Amount_Due />
      <Footer />
    </Container>
  );
}

export default App;
