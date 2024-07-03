const VideoCard = ({ Thumbnail }) => {

    console.log()
    return (
        <div>
            <div className="w-[380px] border border-black h-[330px]">
                <img src={Thumbnail} alt="" width={"100%"} height={"80%"} />
            </div>

        </div>
    )
}

export default VideoCard
