import { VideoCard } from "../../resources"
// eslint-disable-next-line react/prop-types
const FeedVideos = ({ realSuggestedVideo }) => {
    // console.log(realSuggestedVideo)
    // const data = dummySuggestedVideo.items
    const data = realSuggestedVideo?.data
    return (
        <section className="bg-black w-full mt-10 p-4 flex justify-center flex-row flex-wrap h-screen overflow-auto gap-3 max-sm:w-full items-center max-sm:justify-center max-sm:p-0">
            {
                data.map((vid) => {
                    // console.log(vid?.thumbnail?.[1]?.url || vid?.thumbnail?.[0]?.url || vid?.snippet?.thumbnails?.high?.url || vid?.snippet?.thumbnails?.default?.url)
                    if (vid.type !== "video") return null; // Only render videos

                    const thumbnailUrl = vid?.thumbnail?.[1]?.url || vid?.thumbnail?.[0]?.url || vid?.snippet?.thumbnails?.high?.url || vid?.snippet?.thumbnails?.default?.url;
                    // console.log("the url of thumbnail is ", thumbnailUrl)
                    // if (vid?.channelId) {
                    //     return (
                    //         <div key={`${vid?.channelId}-${index}`}>
                    //             <ChannelCard
                    //                 Thumbnail={thumbnailUrl}
                    //                 Title={vid.title}
                    //                 ChannelName={vid.channelTitle}
                    //                 ChannelHandle={vid.channelHandle}
                    //                 ChannelID={vid?.channelId}
                    //                 Description={vid.description}
                    //             />
                    //         </div>
                    //     );
                    // }

                    return (
                        <VideoCard
                            key={thumbnailUrl}
                            Thumbnail={vid?.thumbnail?.[1]?.url || vid?.thumbnail?.[0]?.url || vid?.snippet?.thumbnails?.high?.url || vid?.snippet?.thumbnails?.default?.url}
                            Title={vid.title}
                            ChannelName={vid.channelTitle}
                            VideoID={vid.videoId || vid.playlistId}
                            Length={vid?.lengthText}
                            ViewCount={vid?.viewCount}
                            PublishDate={vid?.publishDate}
                        />
                    );
                })
            }
        </section>

    )
}


export default FeedVideos
