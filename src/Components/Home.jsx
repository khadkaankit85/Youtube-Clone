import Sidebar from "./Sidebar"
import FeedVideos from "./FeedVideos"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { apiEndpoint } from "../Assets/constants"
const Home = () => {

    const [searchData, setsearchData] = useState(null)
    let param = useParams()
    let query = param.query
    if (!query || query == undefined) {
        query = "The story of monkey d luffy"
    }

    useEffect(() => {
        fetch(apiEndpoint, {
            query: {
                searchQuery: "The one piece is real"
            }
        }).then((data) => {
            data.json()
        }).then((json) => {
            console.log(json)
            setsearchData(json)
        })

    }, [query])

    return (
        <section>
            <div className="text-red-400"></div>
            <div className="flex justify-between ">
                <Sidebar />
                {searchData &&
                    <FeedVideos realSuggestedVideo={searchData} />
                }
            </div>

        </section>
    )
}

export default Home
