import Banner from "../components/Banner/Banner";
import Announcement from "../components/Cards/Annoucement";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
    <div className="home">
      <Navigation logo='./pictures/LOGO.png' />
      <Banner
        src="./pictures/banner1.png"
        title="Chez vous, partout et ailleurs"
      />
      <div className="contain-announcement">
        <Announcement />
      </div>
    </div>
    <Footer img="../pictures/LOGO-WHITE.png" />
</>
  );
};
export default Home;
