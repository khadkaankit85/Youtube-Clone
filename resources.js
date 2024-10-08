import EducationIcon from "./src/Assets/EducationIcone.svg"
import GamingIcon from "./src/Assets/gamingIcon.svg"
import HomeIcon from "./src/Assets/homeIcon.svg"
import JavascriptIcon from "./src/Assets/javascript.svg"
import MovieIcon from "./src/Assets/movieIcon.svg"
import RedNBlueBG from "./src/Assets/read and blue background.png"
import verifiedIcon from "./src/Assets/verifiedIcon.png"
import MusicIcon from "./src/Assets/musicIcon.svg"
import ReactIcon from "./src/Assets/reactIcon.svg"
import YoutubeIcon from "./src/Assets/YoutubeIcon.png"
import codeWithHarry from "./src/Assets/codewithharry.png"
import Navbar from "./src/Components/Navbar"
import Sidebar from "./src/Components/Sidebar"
import Home from "./src/Components/Home"
import Watch from "./src/Components/Watch"
import Channel from "./src/Components/Channel"
import WatchFeed from "./src/Components/WatchFeed"
import SearchIcon from "./src/Assets/SearcnIcon.svg"
import VideoCard from "./src/Components/VideoCard"
import ChannelCard from "./src/Components/ChannelCard"
import fetchAPI from "./src/FetchApi"
import ChannelPageCard from "./src/Components/ChannelPageCard"

const Options = [

    {
        name: "Home",
        icon: HomeIcon,
        to: "the story of monkey d luffy/"
    },
    {
        name: "Education",
        icon: EducationIcon,
        to: "education/"
    }, {
        name: "Javascript",
        icon: JavascriptIcon,
        to: "javascript/"
    }, {
        name: "Coding",
        icon: codeWithHarry,
        to: "coding/"
    }, {
        name: "Harry",
        icon: codeWithHarry,
        to: "code with harry"
    }, {
        name: "Gaming",
        icon: GamingIcon,
        to: "gaming/"
    }, {
        name: "React.js",
        icon: ReactIcon,
        to: "react js"
    }, {
        name: "Movie",
        icon: MovieIcon,
        to: "new movies"
    }, {
        name: "Music",
        icon: MusicIcon,
        to: "nepali songs/"
    }, {
        name: "Neffex",
        icon: MusicIcon,
        to: "neffex music"
    }, {
        name: "Bipul Chettri ",
        icon: MusicIcon,
        to: "bipul chhetri"
    }
]

export { Options, YoutubeIcon, RedNBlueBG, SearchIcon, verifiedIcon, Navbar, Sidebar, Home, Watch, Channel, WatchFeed, VideoCard, ChannelCard, ChannelPageCard, fetchAPI }