import react from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";
import "./index.css";
import Activate from "./pages/Activate/Activate";
import Autheticate from "./pages/Authenticate/Authenticate";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Rooms from "./pages/Rooms/Rooms";

const isAuth = false;
const user = {
  activated: false,
};

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route element={<GuestRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/authenticate" element={<Autheticate />} />
        </Route>
        <Route element={<SemiProtected />}>
          <Route exact path="/activate" element={<Activate />} />
        </Route>
        <Route element={<Protected />}>
          <Route exact path="/rooms" element={<Rooms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const GuestRoute = () => {
  return isAuth ? <Navigate to="/rooms" /> : <Outlet />;
};

const SemiProtected = () => {
  if (!isAuth) return <Navigate to="/" />;

  if (isAuth && !user.activated) return <Outlet />;

  return <Navigate to="/rooms" />;
};

const Protected = () => {
  if (!isAuth) return <Navigate to="/" />;

  if (isAuth && !user.activated) return <Navigate to="/activate" />;

  return <Outlet />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
