import { YoutubeIcon, Searchbar } from "../../resources"
const Navbar = () => {
    return (
        <nav className='w-full h-20 bg-white text-white border-solid border-white flex items-center justify-between '>
            <div className="object-cover">
                <img src={YoutubeIcon} width={"80px"} height={"80px"} alt="" />
            </div>
            <Searchbar />
        </nav>
    )
}

export default Navbar
