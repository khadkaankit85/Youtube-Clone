import VideoCard from "./VideoCard"
import { dummySuggestedVideo } from "../../dummydata"
import propTypes from "prop-types"
const WatchFeed = ({ realVideoDetail }) => {
    const data = realVideoDetail.items || dummySuggestedVideo.items


    return (
        <div className="w-[25%] ml-1 
        h-screen
        overflow-y-auto overflow-x-hidden border-black flex-col gap-y-5 flex justify-center
        ">
            {
                data.map((vid) => {
                    if (vid.id.playlistId) return

                    return <VideoCard key={vid.id.videoId || vid.id.playlistId} Thumbnail={vid?.snippet?.thumbnails?.high || vid?.snippet?.thumbnails?.default}
                        Title={vid.snippet.title} ChannelName={vid.snippet.channelTitle} VideoID={vid.id.videoId || vid.id.playlistId}
                    />
                })
            }
        </div>
    )
}
WatchFeed.propTypes = {
    realVideoDetail: propTypes.object.isRequired
}

export default WatchFeed
