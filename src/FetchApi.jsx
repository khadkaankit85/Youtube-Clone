import axios from "axios";


const baseUrl = "https://youtube-v31.p.rapidapi.com/";


async function fetchAPI(q) {
    try {
        const response = await axios.get(`${baseUrl}${q}`, {
            params: {
                relatedToVideoId: '7ghhRHRP6t4',
                part: 'id,snippet',
                type: 'video',
                maxResults: '50'
            },
            headers: {
                'x-rapidapi-key': import.meta.env.REACT_APP_API_KEY,
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        });
        console.log(import.meta.env.REACT_APP_API_KEY)

        return response.data; // Assuming the API returns JSON data
    } catch (error) {
        console.error('Error fetching API:', error);
        throw error; // Handle or rethrow the error as needed
    }
}

export default fetchAPI;
