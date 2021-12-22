import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Intro from "./pages/Intro";
import Header from "./components/Header";
import DeathMode from "./components/DeathMode";
import BucketList from "./pages/BucketList";
import MyBucketLists from "./components/MyBucketLists";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/bucketlist" element={<BucketList />}>
          <Route path="mybucketlists" element={<MyBucketLists />} />
        </Route>
      </Routes>
      <DeathMode />
    </BrowserRouter>
  );
}

export default App;
