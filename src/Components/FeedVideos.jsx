import VideoCard from "./VideoCard"
import propType from "prop-types"
import { dummySuggestedVideo } from "../../dummydata"
const FeedVideos = ({ realSuggestedVideo }) => {
    // const data = dummySuggestedVideo.items
    const data = realSuggestedVideo?.items || dummySuggestedVideo?.items
    console.log(dummySuggestedVideo)
    return (

        <section className="bg-black w-[calc(100%-205px)] p-4 flex flex-row flex-wrap h-[calc(100vh-4rem)] overflow-auto gap-3">
            {
                data.map((vid) => {
                    if (vid.id.playlistId) return

                    return <VideoCard key={vid.id.videoId || vid.id.playlistId} Thumbnail={vid?.snippet?.thumbnails?.high || vid?.snippet?.thumbnails?.default}
                        Title={vid.snippet.title} ChannelName={vid.snippet.channelTitle} VideoID={vid.id.videoId || vid.id.playlistId}
                    />
                })
            }

        </section>
    )
}
FeedVideos.propTypes = {
    realSuggestedVideo: propType.object
}

export default FeedVideos
