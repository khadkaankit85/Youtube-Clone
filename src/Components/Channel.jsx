import { ChannelPageCard, VideoCard } from "../../resources";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Channel = () => {
    const [channelData, setChannelData] = useState(null);
    const [channelVideos, setChannelVideos] = useState(null);
    const param = useParams();
    const channelID = param?.id;

    useEffect(() => {
        // Fetch channel details
        try {
            const channelIdRegex = /^UC[a-zA-Z0-9_-]{22}$/;

            if (!channelIdRegex.test(channelID)) {
                throw new Error("invalid channel id")
            }

            fetch(`https://youtubeapiclone.netlify.app/.netlify/functions/api/video/getChannelData?channelID=${channelID}`)
                .then(async (response) => {
                    const fetchedData = await response.json();
                    setChannelData(fetchedData);
                    console.log("Channel data is ", fetchedData);
                })
                .catch((error) => {
                    console.log("Error fetching channel data: ", error);
                });


            // Fetch channel videos
            fetch(`https://youtubeapiclone.netlify.app/.netlify/functions/api/video/getChannelvideos?channelID=${channelID}`)
                .then(async (response) => {
                    const fetchedData = await response.json();
                    setChannelVideos(fetchedData);
                    console.log("Channel videos are  ", fetchedData);
                })
                .catch((error) => {
                    console.log("Error fetching channel videos: ", error);
                });
        }

        catch (e) {
            console.log("e")

        }
    }, [channelID]);

    if (!channelData) {
        return <>Loading...</>;
    }

    return (
        <>
            {channelData && channelVideos && (
                <div>
                    <div className="overflow-hidden h-[32vh] w-full border-blue-800 border-solid border mt-24 channel-banner">
                        {/* Channel Banner */}
                    </div>

                    <div>
                        <ChannelPageCard data={channelData} />
                    </div>

                    <div className="bg-black h-fit w-full flex flex-wrap gap-3 items-center justify-center">
                        {/* Map the channel videos */}
                        {channelVideos.data.map((vid, index) => {
                            // console.log(vid?.videoId || vid?.playlistId);

                            // Get video key based on whether it's a video or playlist
                            const videoKey = vid?.videoId || vid?.playlistId;

                            // Get thumbnail from the video data
                            const thumbnailUrl = vid?.thumbnail[2]?.url || vid?.thumbnail[1]?.url || vid?.thumbnail[0]?.url;

                            return (
                                <VideoCard
                                    key={videoKey || index}
                                    Thumbnail={thumbnailUrl}
                                    Title={vid?.title}
                                    ChannelName={channelData?.meta?.title || ""}
                                    VideoID={vid?.videoId || vid?.playlistId}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Channel;
