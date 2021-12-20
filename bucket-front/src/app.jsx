import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Intro from "./pages/Intro";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
