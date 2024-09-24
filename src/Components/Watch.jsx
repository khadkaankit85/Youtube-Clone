import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
// import { WatchFeed } from "./../../resources";
import { dummyChannelDetail } from "../../dummydata";
import FeedVideos from "./FeedVideos";

import { Circles } from "react-loader-spinner";

const Watch = () => {
    const [realVideoDetail, setRealVideoDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id: videoID } = useParams();

    const [relatedVideos, setrelatedVideos] = useState(null)

    useEffect(() => {
        const fetchVideoInfo = async () => {
            try {
                const videoIdRegex = /^[a-zA-Z0-9_-]{11}$/;
                if (!videoIdRegex.test(videoID)) {
                    throw new Error("Video Id Error")
                }


                const response = await fetch(`https://youtubeapiclone.netlify.app/.netlify/functions/api/video/info?videoID=${videoID}`);
                const response2 = await fetch(`https://youtubeapiclone.netlify.app/.netlify/functions/api/video/getrelatedVideos?videoID=${videoID}`);

                if (!response.ok || !response2.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                const jsonData2 = await response2.json()
                // console.log(jsonData)
                setRealVideoDetail(jsonData);
                setrelatedVideos(jsonData2)
            } catch (err) {
                console.error("Failed to fetch video info:", err);
                setError(err.message);
                setRealVideoDetail(dummyChannelDetail);
            } finally {
                setIsLoading(false);
                window.scrollTo(0, 0);
            }
        };

        if (videoID) {
            fetchVideoInfo();
        } else {
            setError("No video ID provided");
            setIsLoading(false);
        }
    }, [videoID]);
    console.log(realVideoDetail)

    const videoTitle = realVideoDetail?.title || "Untitled Video";
    const viewCount = realVideoDetail?.viewCount ? parseInt(realVideoDetail.viewCount).toLocaleString() : "0";
    const channelName = realVideoDetail?.channelTitle || "Unknown Channel";
    const channelID = realVideoDetail?.channelId;
    const channelProfilePicture =
        realVideoDetail?.thumbnails?.high?.url ||
        realVideoDetail?.thumbnails?.default?.url ||
        "default-profile.png"; // Ensure this path points to a valid image

    if (isLoading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">

                <Circles
                    height="80"
                    width="80"
                    color="#ff0000"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-black">
                <p className="text-red-500 text-xl">Error: {error}</p>
            </div>
        );
    }

    if (!realVideoDetail) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-black">
                <p className="text-white text-xl">No video details available.</p>
            </div>
        );
    }

    return (
        <>
            <div className="w-full flex md:mt-16 justify-between overflow-hidden max-sm:flex-col sm:justify-normal max-sm:mt-[50px]">
                <div className="w-[75%] bg-black max-h-screen max-sm:w-full max-sm:h-[70vh] max-sm:p-4 max-sm:min-h-[50vh]">
                    {/* Embedded video player */}
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${videoID}`}
                        width="100vw"
                        height="100vh"
                        controls
                        playing
                        className="react-player"
                    />

                </div>
            </div>
            <>
                <div className="text-white bg-[rgba(94,93,93,0.2)] p-6">
                    <h4 className="mb-2">{videoTitle}</h4>
                    <span className="text-right mb-4">{viewCount} views</span>
                    <Link
                        to={`/channel/${channelID}`}
                        className="flex items-center gap-3 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition cursor-pointer"
                    >

                        <span> Uploaded By {channelName}</span>
                    </Link>
                </div>
            </>
            <>
                {relatedVideos && <FeedVideos realSuggestedVideo={relatedVideos} />}
                {!relatedVideos && <div>Loading....</div>}
            </>
        </>
    );
};

export default Watch;
