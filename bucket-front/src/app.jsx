import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Intro from "./pages/Intro";
import Header from "./components/Header";
import DeathMode from "./components/DeathMode";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
      <DeathMode />
    </BrowserRouter>
  );
}

export default App;
