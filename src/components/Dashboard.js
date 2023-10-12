import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Dashboard() {
  const { callSessions } = useContext(AppContext);

  return (
    <div>
      <h2>Your Scheduled Calls</h2>
      {callSessions.map((session) => (
        <div key={session.id}>
          {/* Render each call session details */}
          <p>{session.title}</p>
          <p>{session.date}</p>
          {/* ... other session details */}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
