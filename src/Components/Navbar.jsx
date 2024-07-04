import { YoutubeIcon, SearchIcon } from "../../resources"
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"

const Navbar = () => {
    const inputField = useRef("")
    const navigate = useNavigate()

    return (
        <div className="flex w-full h-16  bg-[#000000] items-center justify-between p-6 fixed">
            {/* youtube logo */}
            <Link to={"/search/one piece"} className="flex items-center gap-2" >

                <img src={YoutubeIcon} alt="" width={"40px"} height={"40px"} />
                <span className="text-white max-sm:hidden">
                    Youtube.com
                </span >
            </Link>
            {/* searchbar */}

            <form className="w-[30%] max-sm:w-[70%]   flex justify-center items-center rounded-md border border-[#928f8f] border-1 font-serif bg" onSubmit={(e) => {
                e.preventDefault()
                if (inputField.current.length > 0) {
                    navigate(`/search/${inputField.current}`)
                }
            }}>
                <div className=" w-[calc(100%-38px)] flex justify-center items-center ">
                    <input type="text" placeholder="Type your input here" className="w-full  outline-none rounded-md p-1 bg-[rgb(54,53,53,0.3)] text-[rgb(100,99,99)]"
                        onChange={(e) => {
                            inputField.current = e.target.value
                        }} />
                </div>
                <button type="sumbit" className="w-[38px] object-contain flex items-center justify-center cursor-pointer border-[#838181] border-l">
                    <abbr title="Search">
                        <img src={SearchIcon} alt="search" height={"25px"} width={"25px"} className="" />
                    </abbr>
                </button >
            </form>


        </div>
    )
}

export default Navbar
