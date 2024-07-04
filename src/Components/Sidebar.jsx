import { Options } from "../../resources"
import { Link } from "react-router-dom"
const Sidebar = () => {
    return (
        <aside className=" flex justify-center items-center w-[200px] h-[calc(100vh-4rem)] border-red-800 flex-col gap-6  bg-black overflow-y-scroll max-sm:hidden  ">
            <div className="h-3 w-full">
            </div>          {
                Options.map((item) => {
                    return <Link to={`/search/${item.to}`} key={item.name} className="text-white flex justify-between items-center w-[80%] rounded-lg transition-all  hover:bg-[rgb(255,0,0)] cursor-pointer" >
                        <img src={item.icon} width={"40px"} height={"40px"} alt="" />  {item.name}
                    </Link>
                })
            }
            <p className="text-white border-solid border-[#6d6c6c] text-center"> copyright Angkit Khadka 2024 </p>
        </aside>

    )
}

export default Sidebar
