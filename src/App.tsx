import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Planner from "./pages/Planner";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </>
  );
};

export default App;

