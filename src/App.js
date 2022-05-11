import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About/About";
import Blogs from "./components/pages/Blogs/Blogs";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Signup from "./components/pages/Signup/Signup";
import Footer from "./components/Shared/Footer/Footer";
import WareNav from "./components/Shared/WareNav/WareNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyItems from "./components/pages/MyItems/MyItems";
import ManageItems from "./components/pages/ManageItems/ManageItems";
import RequiredAuth from "./components/Shared/RequireAuth/RequireAuth";
import AddItems from "./components/pages/AddItems/AddItems";
import ItemDetails from "./components/pages/ItemDetails/ItemDetails";
import ProgressBar from "react-scroll-progress-bar";

function App() {
  return (
    <div>
      <ProgressBar bgcolor="#31C48D" />
      <div className="max-w-[95vw] mx-auto">
        <div className="flex flex-col min-h-[75vh]">
          <WareNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/manageItems"
              element={
                <RequiredAuth>
                  <ManageItems />
                </RequiredAuth>
              }
            />
            <Route
              path="/item/:itemId"
              element={
                <RequiredAuth>
                  <ItemDetails />
                </RequiredAuth>
              }
            />
            <Route
              path="/addItems"
              element={
                <RequiredAuth>
                  <AddItems />
                </RequiredAuth>
              }
            />
            <Route
              path="/myItems"
              element={
                <RequiredAuth>
                  <MyItems />
                </RequiredAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
