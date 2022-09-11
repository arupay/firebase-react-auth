import { MDBContainer } from "mdb-react-ui-kit";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { PrivateRoute } from "./Components/PrivateRoute";
import { Dashboard } from "./Components/Dashboard";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";

function App() {
  return (
    <MDBContainer
      className="d-flex align-items-center justify-content-center bg-dark m-0 p-0"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backroundImage: "linear-gradient(to right, #051421, #042727)",
      }}
    >
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/update-profile"
              element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </MDBContainer>
  );
}

export default App;
