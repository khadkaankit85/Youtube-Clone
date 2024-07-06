import propTypes from "prop-types"
import { Link } from "react-router-dom"
const VideoCard = ({ Thumbnail, Title, VideoID, ChannelName }) => {
    return (
        <Link to={`/watch/${VideoID}`} >
            <div className="w-[320px] border border-black h-[330px] bg-[rgba(66,62,62,0.4)] hover:bg-[rgba(66,62,62,0.7)] cursor-pointer rounded-lg overflow-hidden max-sm:w-[360px]  max-sm:my-3">

                <div className="object-cover w-[340px] h-[225px] overflow-hidden max-sm:w-[420px]">
                    <img src={Thumbnail.url} alt="Thumbnail" className="object-cover object-center w-full h-full" />
                </div>


                <div className="pl-2 h-[calc(100%-225px)] w-full ">

                    <h5 className="text-white text-clip h-[50%] overflow-hidden" >{Title}</h5>
                    <p className="text-white text-sm font-semibold mt-1">{ChannelName}</p>
                </div>
            </div>

        </Link>
    )
}
VideoCard.propTypes = {
    Thumbnail: propTypes.object,
    ChannelName: propTypes.string,
    Views: propTypes.string,
    Title: propTypes.string,
    VideoID: propTypes.string

}

export default VideoCard

