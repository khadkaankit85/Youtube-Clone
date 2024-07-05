import { RedNBlueBG } from "../../resources"
import { ChannelCard } from "../../resources"
import { dummySuggestedVideo } from "../../dummydata"
import propTypes from "prop-types"
const Channel = ({ realSuggestedVideo }) => {
    // const data = realSuggestedVideo?.items || dummySuggestedVideo?.items

    return (
        <>
            <div className=" overflow-hidden h-[32vh] w-full bg-red-950 border-blue-800 border-solid border mt-24" >
                <img src={RedNBlueBG} className="object-cover" alt="" width={"full"} height={"20vh"} />

            </div>
            {/* <ChannelCard key={vid?.id?.channelId} Thumbnail={vid?.snippet?.thumbnails?.high || vid?.snippet?.thumbnails?.default}
                Title={vid.snippet.title} ChannelName={vid.snippet.channelTitle} ChannelID={vid?.id?.channelId} */}
            />
            <div className="bg-black h-screen w-screen">

            </div>
        </>
    )
}

Channel.propTypes = {
    realSuggestedVideo: propTypes.object
}

export default Channel
