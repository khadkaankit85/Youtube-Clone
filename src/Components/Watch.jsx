import { WatchFeed } from "./../../resources"
import ReactPlayer from "react-player"
import { useParams, Link } from "react-router-dom"
import { dummyChannelDetail } from "../../dummydata"
import { useEffect, useState } from "react"
import fetchAPI from "../FetchApi"

const Watch = () => {
    const [realVideoDetail, setrealVideoDetail] = useState(null)
    const videoID = useParams().id

    useEffect(() => {
        fetchAPI(`/search?relatedToVideoId=${videoID}&part=id%2Csnippet&type=video&maxResults=50`).then((video) => {
            setrealVideoDetail(video)
        }).catch(() => {
            setrealVideoDetail(dummyChannelDetail)
        })

        window.scrollTo(0, 0)
    }, [videoID])



    // const videoDetail = dummyVideoDetail.items[0].snippet
    // const videoStatistics = dummyVideoDetail.items[0].statistics
    const videoDetail = realVideoDetail?.items[0]?.snippet
    const videoStatistics = realVideoDetail?.items[0]?.videoStatistics
    const ChannelID = realVideoDetail?.items[0]?.snippet?.channelId


    const videoTitle = videoDetail?.title
    // const viewsCount = videoStatistics.viewCount
    const likesCount = videoStatistics?.likeCount
    const channelName = videoDetail?.channelTitle

    const pfp = realVideoDetail
    console.log(pfp)

    const channelProfilePicture = realVideoDetail?.items[0]?.snippet?.thumbnails?.high?.url || realVideoDetail?.items[0]?.snippet?.thumbnails?.default?.url
    return (
        <div className="w-full flex md:mt-16 justify-between  overflow-hidden max-sm:flex-col sm:justify-normal max-sm:mt-[50px] ">


            {realVideoDetail &&
                <div className="w-[75%] border-red-700 max-h-screen border-solid bg-black max-sm:w-full max-sm:h-[70vh] max-sm:p-4 max-sm:min-h-[50vh]">
                    {/* embedded video plays here */}
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${videoID}`} width={"100%"} height={"60%"} controls playing></ReactPlayer>
                    <div className="text-white  bg-[rgb(94,93,93,0.2)] ">

                        <h4 className="p-6">{videoTitle}</h4>
                        <p className="text-right">{parseInt(likesCount).toLocaleString()} likes</p>

                        <Link to={`/channel/${ChannelID}`} className="ml-6  p-2  rounded-lg flex items-center gap-3 max-sm:p-6 cursor-pointer">
                            <img src={channelProfilePicture} width={"40px"} height={"40px"} alt="" className="rounded-full inline" />

                            {channelName} :)</Link >

                    </div>
                </div>}
            {
                realVideoDetail &&
                <WatchFeed realVideoDetail={realVideoDetail} />
            }{
                !realVideoDetail &&
                <div className="w-screen h-screen bg-black">

                </div>
            }


        </div>
    )
}

export default Watch
