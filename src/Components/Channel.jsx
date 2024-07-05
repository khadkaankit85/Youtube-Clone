import { RedNBlueBG, ChannelCard, fetchAPI } from "../../resources"
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

                    <div className=" overflow-hidden h-[32vh] w-full bg-red-950 border-blue-800 border-solid border mt-24" >
                        <img src={RedNBlueBG} className="object-cover" alt="" width={"full"} height={"20vh"} />

                    </div>

                    <div className="bg-black h-screen w-screen">

                    </div>
                </div>

            }
            {/* <ChannelCard key={vid?.id?.channelId} Thumbnail={vid?.snippet?.thumbnails?.high || vid?.snippet?.thumbnails?.default}
                Title={vid.snippet.title} ChannelName={vid.snippet.channelTitle} ChannelID={vid?.id?.channelId}
            /> */}
        </>
    )
}

Channel.propTypes = {
    realSuggestedVideo: propTypes.object
}

export default Channel
