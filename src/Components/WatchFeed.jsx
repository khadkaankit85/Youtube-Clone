import VideoCard from "./VideoCard"
import { dummySuggestedVideo } from "../../dummydata"
import propTypes from "prop-types"
const WatchFeed = ({ realVideoDetail }) => {
    let data = realVideoDetail?.items

    if (data === null) { data = dummySuggestedVideo?.items }


    return (
        <div className="w-[25%] max-sm:w-full ml-1 
        h-screen
        overflow-y-auto overflow-x-hidden border-black flex-col gap-y-5 flex justify-center max-sm:h-fit max-sm:items-center
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
    realVideoDetail: propTypes.object
}

export default WatchFeed
