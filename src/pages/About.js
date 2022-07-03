import Banner from "../components/Banner/Banner";
import DropDownLarge from "../components/DropDown/DropDownLarge";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="about">
        <Navigation />
        <Banner src="./pictures/banner2.png" />
        <DropDownLarge />
      </div>
      <Footer img="../pictures/LOGO-WHITE.png" />
    </>
  );
};
export default About;
