import { auth } from "../../auth";

export const getSession = async () => {
  try {
    const session = await auth(); // Assuming auth() is an async function that fetches the current session
    return session;
  } catch (error) {
    // Handle errors or return default session state
    console.error("Error fetching session:", error);
    return null; // or handle default session state
  }
};
