import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About/About";
import Blogs from "./components/pages/Blogs/Blogs";
import Home from "./components/pages/Home/Home";
import Inventory from "./components/pages/Inventory/Inventory";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Signup from "./components/pages/Signup/Signup";
import Footer from "./components/Shared/Footer/Footer";
import WareNav from "./components/Shared/WareNav/WareNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyItems from "./components/MyItems/MyItems";
import ManageItems from "./components/pages/ManageItems/ManageItems";

function App() {
  return (
    <main >
      <div className="max-w-[95vw] mx-auto">
        <div className="flex flex-col min-h-[75vh]">
          <WareNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/manageitems" element={<ManageItems />} />
            <Route path="/additems" element={<Inventory />} />
            <Route path="/myItems" element={<MyItems />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <ToastContainer/>
    </main>
  );
}

export default App;
