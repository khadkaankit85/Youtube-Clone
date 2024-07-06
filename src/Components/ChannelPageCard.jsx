import propTypes from "prop-types"
// import { dummyChannelData } from "../../dummydata"
import { verifiedIcon } from "../../resources"

const ChannelPageCard = ({ data }) => {
    // let data = dummyChannelData
    let useAbleData = data.items[0]
    let dataSnippet = useAbleData.snippet
    return (
        <div className="flex w-full flex-col justify-center items-center translate-y-[-120px]">
            <div className="object-cover w-[250px] h-[250px] overflow-hidden rounded-[50%]">
                <img src={dataSnippet?.thumbnails?.high?.url || dataSnippet?.thumbnails?.default?.url} alt="Thumbnail" className="object-cover object-center w-full h-full" />
            </div>
            <div className=" min-h-fit    p-1">
                <h3 className=" text-white font-thin font-serif flex justify-center items-center gap-1">
                    {dataSnippet?.title}                    <img src={verifiedIcon} alt="verified" width={20} height={20} />
                </h3>
                <h3 className=" text-white font-mono">
                    {parseInt(useAbleData?.statistics?.subscriberCount).toLocaleString()} subscribers
                </h3>

            </div>

        </div>

    )
}
ChannelPageCard.propTypes = {
    data: propTypes.object.isRequired

}

export default ChannelPageCard

