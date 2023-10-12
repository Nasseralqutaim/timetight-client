import React from "react";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
// ... other imports

function App() {
  return (
    <AppProvider>
      <Navbar />
      {/* Routes and other components go here */}
      <Dashboard />
    </AppProvider>
  );
}

export default App;
