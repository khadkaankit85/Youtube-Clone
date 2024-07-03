import VideoCard from "./VideoCard"
import { dummySuggestedVideo } from "../../dummydata"
const FeedVideos = () => {
    const data = dummySuggestedVideo.items
    return (
        <section className="text-black w-[calc(100%-205px)] p-4 flex flex-row flex-wrap h-[calc(100vh-4rem)] overflow-auto gap-3">
            {
                data.map((vid) => {
                    if (vid.id.videoId) {
                        console.log(vid?.id?.videoId)
                    }
                    else {
                        vid.id.playlistId
                    }
                    return <VideoCard key={vid.id.videoId || vid.id.playlistId} Thumbnail={vid?.snippet?.thumbnails?.high?.url || vid?.snippet?.thumbnails?.default?.url} />
                })
            }

        </section>
    )
}

export default FeedVideos
