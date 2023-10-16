import axios from "axios";
const BASE_URL = "http://localhost:3001";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("jwt");

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, { user: userData });
    return response.data;
  } catch (error) {
    console.error("Error registering the user:", error);
    throw error;
  }
};

export const fetchCallSessions = () => {
  return axios.get(`${BASE_URL}/call_sessions`);
};

export const createFeedback = (callSessionId, feedbackData) => {
  return axios.post(`${BASE_URL}/call_sessions/${callSessionId}/feedbacks`, feedbackData);
};
