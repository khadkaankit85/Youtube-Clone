import Sidebar from "./Sidebar"
import FeedVideos from "./FeedVideos"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { apiEndpoint } from "../Assets/constants"
import { Circles } from "react-loader-spinner"

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
                console.log(data)
                setLoading(false) // End loading
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false) // End loading
            })
    }, [query])

    return (
        <section className="bg-black  min-h-[100vh]">
            <div className="text-red-400"></div>
            <div className="flex justify-between ">
                <div className="fixed left-0">

                    <Sidebar />
                </div>
                {loading && <div className="w-screen h-screen flex items-center justify-center">

                    <Circles
                        height="80"
                        width="80"
                        color="#ff0000"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>}  {/* Show loading state */}
                {error && <div>Error: {error}</div>} {/* Show error state */}
                {searchData &&
                    <div className="flex items-end w-full justify-end bg-black  min-h-[100vh]">
                        <div className="md:w-[calc(100vw-240px)] flex items-end  min-h-[100vh] h-fit  bg-black">
                            <FeedVideos realSuggestedVideo={searchData} />
                        </div>
                    </div>


                }
            </div>
        </section>
    )
}

export default Home
