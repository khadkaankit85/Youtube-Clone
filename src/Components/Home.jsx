import Sidebar from "./Sidebar"
import FeedVideos from "./FeedVideos"
import { useParams } from "react-router-dom"
import fetchAPI from "../FetchApi"
import { useEffect, useState } from "react"

const Home = () => {

    const [searchData, setsearchData] = useState(null)
    let param = useParams()
    if (!param) {
        param = "nepal"
    }

    useEffect(() => {
        console.log("the param is ", param)
        fetchAPI(`/search?q=${param.query}&part=snippet%2Cid&maxResults=50&order=date`)
            .then((data => {
                setsearchData(data)
            }))
            .catch((e) => {
                console.log(e)
            })

    }, [param])

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
