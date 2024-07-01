import { Options } from "../../resources"
const Sidebar = () => {
    return (
        <aside className=" flex justify-center items-center w-[200px] h-full border-red-800 flex-col gap-9 mt-1 bg-black  overflow-auto">            {
            Options.map((item) => {
                return <div key={item.name} className="text-white flex justify-between items-center w-[80%] ml-3 "> <img src={item.icon} width={"40px"} height={"40px"} alt="" />  {item.name}</div>
            })
        }
            <p className="text-white border-solid border-[#6d6c6c] text-center"> copyright Angkit Khadka 2024 </p>
        </aside>

    )
}

export default Sidebar
