import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Complaints from "./pages/Complaints";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import Meetings from "./pages/Meetings";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Visitors from "./pages/Visitors";
import Vote from "./pages/Vote";
import "./styles/components/app/app.css";

const App2 = () => {
  // const user = false;
  const isActive = useSelector((state: any) => state.slider.isActive);
  const user = useSelector((state: any) => state.user.currentUser);

  return (
    <div className="App">
      <div style={user? {display: "block"} : {display: "none"}}
        className={isActive ? "slider--active sidebar--container" : "sidebar--container"}>
        <Sidebar />
      </div>
      {/* Routes */}
      <div className="main--container">
        {/* Navbar */}
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />

          <Route
            path="/"
            element={!user ? <Navigate to="/login" /> : <Home />}
          />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App2;
