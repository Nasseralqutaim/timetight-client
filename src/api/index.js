import axios from "axios";
const BASE_URL = "http://localhost:3001";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("jwt");
const getAuthHeaders = () => {
  return {
    Authorization: "Bearer " + localStorage.getItem("jwt"),
  };
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, { user: userData });
    return response.data;
  } catch (error) {
    console.error("Error registering the user:", error);
    throw error;
  }
};

export const fetchCallSessions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/call_sessions`, { headers: getAuthHeaders() });
    return response.data; // This should be the actual array of call sessions
  } catch (error) {
    console.error("Error fetching call sessions:", error);
    throw error;
  }
};

export const createFeedback = (callSessionId, feedbackData) => {
  return axios.post(`${BASE_URL}/call_sessions/${callSessionId}/feedbacks`, feedbackData);
};
