import Sidebar from "./Sidebar"
import FeedVideos from "./FeedVideos"

const Home = () => {
    return (
        <section>
            <div className="flex justify-between">
                <Sidebar />
                <FeedVideos />
            </div>

        </section>
    )
}

export default Home
