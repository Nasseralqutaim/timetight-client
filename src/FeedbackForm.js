import React, { useState } from "react";

function FeedbackForm({ onSubmit }) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
