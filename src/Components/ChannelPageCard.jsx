import propTypes from "prop-types"
// import { dummyChannelData } from "../../dummydata"
import { verifiedIcon } from "../../resources"

const ChannelPageCard = ({ data }) => {
    // let data = dummyChannelData
    let dataSnippet = data.data
    let useAbleData = dataSnippet

    console.log("Data in channelpage card is ", data)


    return (
        <div className="flex w-full flex-col justify-center items-center translate-y-[-120px]">
            <div className="object-cover w-[250px] h-[250px] overflow-hidden rounded-[50%]">
                <img src={data?.meta?.avatar[2]?.url || data?.meta?.avatar[1]?.url || data?.meta?.avatar[0]?.url} alt="Thumbnail" className="object-cover object-center w-full h-full rounded-full" />
            </div>
            <div className=" min-h-fit    p-1">
                <h3 className=" text-white font-thin font-serif flex justify-center items-center gap-1">
                    {dataSnippet?.title}                    <img src={verifiedIcon} alt="verified" width={20} height={20} />
                </h3>
                <h3 className=" text-white font-mono">
                    {parseInt(data?.meta?.subscriberCount).toLocaleString() || "-"} subscribers
                </h3>

            </div>

        </div>

    )
}
ChannelPageCard.propTypes = {
    data: propTypes.object.isRequired

}

export default ChannelPageCard

