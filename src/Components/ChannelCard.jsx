import propTypes from "prop-types"
import { Link } from "react-router-dom"
const ChannelCard = ({ Thumbnail, ChannelName, ChannelID }) => {
    return (
        <Link to={`/channel/${ChannelID}`}>
            <div className="w-[320px] border border-black h-[330px] bg-[rgba(66,62,62,0.4)] hover:bg-[rgba(66,62,62,0.7)] cursor-pointer rounded-lg overflow-hidden
            
            max-sm:w-[360px]  max-sm:my-3">

                <div className="object-cover w-[400px] h-[225px] overflow-hidden">
                    <img src={Thumbnail} alt="Thumbnail" className="object-cover object-center w-full h-full" />
                </div>


                <div className="pl-2 h-[calc(100%-225px)] w-full">

                    <p className="text-white text-sm font-semibold mt-1">{ChannelName}</p>
                    <p className="text-white text-clip  overflow-hidden font-thin text-sm" >Youtube Channel</p>
                </div>
            </div>

        </Link>
    )
}
ChannelCard.propTypes = {
    Thumbnail: propTypes.object,
    ChannelName: propTypes.string,
    Views: propTypes.string,
    Title: propTypes.string,
    ChannelID: propTypes.string

}

export default ChannelCard

