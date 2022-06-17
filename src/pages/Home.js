import Banner from "../components/Banner/Banner";
import Announcement from "../components/Cards/Annoucement";
import Navigation from "../components/Navigation/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Banner
        src="./pictures/banner1.png"
        title="Chez vous, partout et ailleurs"
      />
      <div className="contain-announcement">
        <Announcement />
      </div>
    </div>
  );
};
export default Home;
