import React from "react";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
