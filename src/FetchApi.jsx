import axios from "axios";

async function fetchAPI(q) {
    try {
        const response = await axios.get(`/getData?q=${q}`);
        return response.data; // Assuming the API returns JSON data
    } catch (error) {
        console.error('Error fetching API:', error);
        throw error; // Handle or rethrow the error as needed
    }
}

export default fetchAPI;
