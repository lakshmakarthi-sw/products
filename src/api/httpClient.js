const baseURL = "https://dummyjson.com/";

export const httpClient = {
    get: async (endpoint) => {
        try {
            const response = await fetch(`${baseURL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }   
            return await response.json();
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    },
}
