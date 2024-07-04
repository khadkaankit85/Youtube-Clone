import axios from "axios";


const baseUrl = "https://youtube-v31.p.rapidapi.com";


async function fetchAPI(q) {
    try {
        console.log("the api key is ", import.meta.env.VITE_API_KEY)

        const response = await axios.get(`${baseUrl}${q}`, {
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            }
        });

        return response.data; // Assuming the API returns JSON data
    } catch (error) {
        console.error('Error fetching API:', error);
        throw error; // Handle or rethrow the error as needed
    }
}

export default fetchAPI;
