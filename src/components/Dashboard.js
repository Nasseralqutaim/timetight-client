import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { fetchCallSessions } from "../api";

function Dashboard() {
  const { callSessions, setCallSessions } = useContext(AppContext);

  useEffect(() => {
    const getCallSessions = async () => {
      try {
        const response = await fetchCallSessions();
        console.log("Fetched Call Sessions:", response);
        console.log("Existing callSessions:", callSessions);
        if (response && Array.isArray(response)) {
          // Check if the response is an array
          setCallSessions(response);
        }
      } catch (error) {
        console.error("Error fetching call sessions:", error);
      }
    };

    getCallSessions();
  }, [setCallSessions]);

  return (
    <div>
      <h2>Your Scheduled Calls</h2>
      {callSessions.map((session) => (
        <div key={session.id}>
          <p>Initiator ID: {session.initiator_id}</p>
          <p>Recipient ID: {session.recipient_id}</p>
          <p>Start Time: {session.start_time}</p>
          <p>End Time: {session.end_time}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
