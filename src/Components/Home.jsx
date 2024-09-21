import Sidebar from "./Sidebar"
import FeedVideos from "./FeedVideos"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { apiEndpoint } from "../Assets/constants"

const Home = () => {

    const [searchData, setSearchData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    let { query } = useParams() // Destructuring to get 'query' directly
    query = query || "The story of monkey d luffy" // Default value

    useEffect(() => {
        setLoading(true) // Start loading before fetch
        fetch(`${apiEndpoint}/search?searchQuery=${query}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json() // Parse response as JSON
            })
            .then((data) => {
                setSearchData(data)
                setLoading(false) // End loading
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false) // End loading
            })
    }, [query])

    return (
        <section>
            <div className="text-red-400"></div>
            <div className="flex justify-between ">
                <Sidebar />
                {loading && <div>Loading...</div>}  {/* Show loading state */}
                {error && <div>Error: {error}</div>} {/* Show error state */}
                {searchData &&
                    <FeedVideos realSuggestedVideo={searchData} />
                }
            </div>
        </section>
    )
}

export default Home
