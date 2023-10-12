import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [callSessions, setCallSessions] = useState([]); // Store all call sessions
  // Add other states as needed...

  return <AppContext.Provider value={{ callSessions, setCallSessions }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
