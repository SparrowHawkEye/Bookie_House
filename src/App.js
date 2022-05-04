import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/pages/Blogs/Blogs";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import WareNav from "./components/Shared/WareNav/WareNav";

function App() {
  return (
    <>
    <WareNav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    </>
  );
}

export default App;
