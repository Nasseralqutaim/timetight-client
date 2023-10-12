import axios from "axios";

const BASE_URL = "http://localhost:3000"; // Adjust this to your backend server's address

export const fetchCallSessions = () => {
  return axios.get(`${BASE_URL}/call_sessions`);
};

export const createFeedback = (callSessionId, feedbackData) => {
  return axios.post(`${BASE_URL}/call_sessions/${callSessionId}/feedbacks`, feedbackData);
};

// Similarly, define other API calls.
