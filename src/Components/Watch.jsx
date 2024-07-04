import { WatchFeed } from "./../../resources"
import ReactPlayer from "react-player"
import { useParams } from "react-router-dom"
import { dummyVideoDetail, dummyChannelDetail } from "../../dummydata"
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
    }, [videoID])



    // const videoDetail = dummyVideoDetail.items[0].snippet
    // const videoStatistics = dummyVideoDetail.items[0].statistics
    const videoDetail = realVideoDetail?.items[0]?.snippet || dummyVideoDetail?.items[0]?.snippet
    const videoStatistics = realVideoDetail?.items[0]?.videoStatistics || dummyVideoDetail?.items[0]?.statistics

    const videoTitle = videoDetail?.title
    // const viewsCount = videoStatistics.viewCount
    const likesCount = videoStatistics?.likeCount
    const channelName = videoDetail?.channelTitle

    const channelProfilePicture = realVideoDetail?.items[0]?.snippet?.thumbnails?.high?.url || realVideoDetail?.items[0]?.snippet?.thumbnails?.default?.url || dummyChannelDetail?.items[0]?.snippet?.thumbnails?.high?.url || dummyChannelDetail?.items[0]?.snippet?.thumbnails?.default?.url


    return (
        <div className="w-full flex  justify-between mt-4 overflow-hidden max-sm:flex-col sm:justify-normal">
            <div className="w-[75%] border-red-700 min-h-screen border-solid bg-black max-sm:w-full max-sm:h-[50vh] max-sm:p-4 max-sm:min-h-[70vh]">
                {/* embedded video plays here */}
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoID}`} width={"100%"} height={"60%"} controls playing></ReactPlayer>
                <div className="text-white  bg-[rgb(94,93,93,0.2)] ">

                    <h4 className="p-6">{videoTitle}</h4>
                    <p className="text-right">{parseInt(likesCount).toLocaleString()} likes</p>

                    <span className="ml-6  p-2 rounded-lg flex items-center gap-3">
                        <img src={channelProfilePicture} width={"40px"} height={"40px"} alt="" className="rounded-full inline" />

                        {channelName} :)</span>

                </div>
            </div>
            {
                realVideoDetail &&
                <WatchFeed realVideoDetail={realVideoDetail} />
            }
        </div>
    )
}

export default Watch
