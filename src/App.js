import React from "react";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./Signup";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
