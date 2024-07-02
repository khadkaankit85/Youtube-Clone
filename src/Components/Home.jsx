import Sidebar from "./Sidebar"
import FeedVideos from "./FeedVideos"

const Home = () => {
    return (
        <section>
            <div className="flex justify-center items-center">
                <Sidebar />
                <FeedVideos />
            </div>

        </section>
    )
}

export default Home
