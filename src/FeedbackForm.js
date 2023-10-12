import React, { useState } from 'react';
import { createFeedback } from '../api';

function FeedbackForm({ callSessionId }) { // Assuming you have the call session's ID
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFeedback(callSessionId, { feedback });
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Error submitting feedback. Please try again.");
    }
  };

  return (
    // ... Rest of the component remains the same
  );
}
