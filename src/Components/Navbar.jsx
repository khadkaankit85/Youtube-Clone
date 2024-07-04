import { YoutubeIcon, SearchIcon } from "../../resources"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="flex w-full h-16  bg-[#000000] items-center justify-between p-6">
            {/* youtube logo */}
            <Link to={"/search/one piece"} className="flex items-center gap-2" >

                <img src={YoutubeIcon} alt="" width={"40px"} height={"40px"} />
                <span className="text-white">
                    Youtube.com
                </span >
            </Link>
            {/* searchbar */}
            <div className="w-[30%] flex justify-center items-center rounded-md border border-[#928f8f] border-1 font-serif bg">
                <div className=" w-[calc(100%-38px)] flex justify-center items-center ">
                    <input type="text" placeholder="Type your input here" className="w-full  outline-none rounded-md p-1 bg-[rgb(54,53,53,0.3)] text-[rgb(100,99,99)]" />
                </div>
                <div className="w-[38px] object-contain flex items-center justify-center cursor-pointer border-[#838181] border-l">
                    <abbr title="Search">
                        <img src={SearchIcon} alt="search" height={"25px"} width={"25px"} className="" />
                    </abbr>
                </div>
            </div>


        </div>
    )
}

export default Navbar
