import "./App.css";
import Header from "./components/header/Header";
import Container from "@mui/material/Container";
import Features from "./components/features/Features";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
  
        <Features />
      </Container>
    </div>
  );
}

export default App;
