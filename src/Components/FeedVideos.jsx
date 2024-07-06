import { VideoCard, ChannelCard } from "../../resources"
import propType from "prop-types"
import { dummySuggestedVideo } from "../../dummydata"
const FeedVideos = ({ realSuggestedVideo }) => {
    // const data = dummySuggestedVideo.items
    const data = realSuggestedVideo?.items || dummySuggestedVideo?.items
    return (

        <section className="bg-black w-[calc(100%-205px)] mt-10 p-4 flex flex-row flex-wrap h-screen overflow-auto gap-3 max-sm:w-full items-center max-sm:justify-center max-sm:p-0">
            {
                data.map((vid) => {
                    if (vid?.id?.playlistId) return

                    if (vid?.id?.channelId) {
                        console.log(vid)
                        console.log("this channel's id is ", vid?.id?.channelId)
                        return <ChannelCard key={vid?.id?.channelId} Thumbnail={vid?.snippet?.thumbnails?.high || vid?.snippet?.thumbnails?.default}
                            Title={vid.snippet.title} ChannelName={vid.snippet.channelTitle} ChannelID={vid?.id?.channelId}
                        />
                    }

                    return <VideoCard key={vid?.id?.videoId} Thumbnail={vid?.snippet?.thumbnails?.high || vid?.snippet?.thumbnails?.default}
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
