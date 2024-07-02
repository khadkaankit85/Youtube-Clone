import { SearchIcon } from "../../resources"
const Searchbar = () => {
    return (
        <div className="w-24 h-12 flex justify-center items-center">
            <div className="w-85%">
                <input type="text" />
            </div>
            <div className="w-[15%] h-full">
                <img src={SearchIcon} className="" alt="" />
            </div>
        </div>
    )
}

export default Searchbar
