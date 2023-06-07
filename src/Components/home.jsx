import Banner from "./banner"
import Categories from "./categories";
import Video from "./videos";

const Home = () => {
    return ( 
        <div className="home">
            <Categories/>
            <Banner/>
            <Video/>
        </div>
     );
}
 
export default Home;