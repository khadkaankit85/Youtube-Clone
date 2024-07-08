import { ChannelPageCard, fetchAPI, VideoCard } from "../../resources"
// import { dummySuggestedVideo } from "../../dummydata"
import { useParams } from "react-router-dom"
import propTypes from "prop-types"
import { useEffect, useState } from "react"


const Channel = () => {
    const [channelData, setchannelData] = useState(null)
    const [ChannelVideos, setChannelVideos] = useState(null)
    // const data = realSuggestedVideo?.items || dummySuggestedVideo?.items
    const param = useParams()
    const channelID = param?.id

    useEffect(() => {
        // we gonna fetch channel detail and channel videos here

        fetchAPI(`/channels?part=snippet%2Cstatistics&id=${channelID}`).then((data) => {
            setchannelData(data)
        }).catch((e) => {
            console.log(e)
        })

        fetchAPI(`/search?channelId=${channelID}&part=snippet%2Cid&maxResults=50`).then((data) => {
            setChannelVideos(data)

        }).catch((e) => {
            console.log(e)
        })

    }, [channelID])

    return (
        <>

            {channelData && ChannelVideos &&
                <div>

                    <div className=" overflow-hidden h-[32vh] w-full  border-blue-800 border-solid border mt-24 channel-banner " >
                        {/* <img src={RedNBlueBG} className="object-cover" alt="" width={"full"} height={"20vh"} /> */}

                    </div>

                    <div className="">
                        <ChannelPageCard data={channelData} />

                    </div>

                    <div className="bg-black h-fit  w-full flex flex-wrap gap-3 items-center justify-center" >

                        {
                            ChannelVideos.items.map((vid) => {
                                const videoKey = vid?.id?.videoId || vid?.id?.playlistId;
                                return <VideoCard key={videoKey} Thumbnail={vid?.snippet?.thumbnails?.high || vid?.snippet?.thumbnails?.default}
                                    Title={vid.snippet.title} ChannelName={vid.snippet.channelTitle} VideoID={vid.id.videoId || vid.id.playlistId}
                                />
                            })
                        }

                    </div>
                </div>

            }


        </>
    )
}

Channel.propTypes = {
    realSuggestedVideo: propTypes.object
}

export default Channel
