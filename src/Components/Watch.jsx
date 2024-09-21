import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
// import { WatchFeed } from "./../../resources";
import { dummyChannelDetail } from "../../dummydata";
import FeedVideos from "./FeedVideos";

const Watch = () => {
    const [realVideoDetail, setRealVideoDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id: videoID } = useParams();

    const [relatedVideos, setrelatedVideos] = useState(null)

    useEffect(() => {
        const fetchVideoInfo = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/video/info?videoID=${videoID}`);
                const response2 = await fetch(`${import.meta.env.VITE_API_URL}/video/getrelatedVideos?videoID=${videoID}`);

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

    const videoTitle = realVideoDetail?.title || "Untitled Video";
    const viewCount = realVideoDetail?.viewCount ? parseInt(realVideoDetail.viewCount).toLocaleString() : "0";
    const likesCount = realVideoDetail?.likeCount ? parseInt(realVideoDetail.likeCount).toLocaleString() : "0";
    const channelName = realVideoDetail?.channelTitle || "Unknown Channel";
    const channelID = realVideoDetail?.channelId;
    const channelProfilePicture =
        realVideoDetail?.thumbnails?.high?.url ||
        realVideoDetail?.thumbnails?.default?.url ||
        "default-profile.png"; // Ensure this path points to a valid image

    if (isLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-black">
                <p className="text-white text-xl">Loading...</p>
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
                    <div className="text-white bg-[rgba(94,93,93,0.2)] p-6">
                        <h4 className="mb-2">{videoTitle}</h4>
                        <p className="text-right mb-4">{likesCount} likes</p>
                        <p className="text-right mb-4">{viewCount} views</p>
                        <Link
                            to={`/channel/${channelID}`}
                            className="flex items-center gap-3 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition cursor-pointer"
                        >
                            <img
                                src={channelProfilePicture}
                                width="40"
                                height="40"
                                alt={`${channelName} Profile`}
                                className="rounded-full"
                            />
                            <span>{channelName}</span>
                        </Link>
                    </div>
                </div>
            </div>
            <>
                {relatedVideos && <FeedVideos realSuggestedVideo={relatedVideos} />}
                {!relatedVideos && <div>Loading....</div>}
            </>
        </>
    );
};

export default Watch;
