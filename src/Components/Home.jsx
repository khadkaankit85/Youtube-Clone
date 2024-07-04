import Sidebar from "./Sidebar"
import FeedVideos from "./FeedVideos"
import { useParams } from "react-router-dom"
import fetchAPI from "../FetchApi"
import { useEffect, useState } from "react"

const Home = () => {

    const [searchData, setsearchData] = useState(null)
    let param = useParams()
    let query = param.query
    if (!query || query == undefined) {
        query = "The story of monkey d luffy"
    }

    useEffect(() => {
        fetchAPI(`/search?q=${query}&part=snippet%2Cid&maxResults=50`)
            .then((data => {
                setsearchData(data)
            }))
            .catch((e) => {
                console.log(e)
            })

    }, [query])

    return (
        <section>
            <div className="text-red-400"></div>
            <div className="flex justify-between">
                <Sidebar />
                <FeedVideos realSuggestedVideo={searchData} />
            </div>

        </section>
    )
}

export default Home
