import Banner from "../components/Banner/Banner";
import DropDownLarge from "../components/DropDown/DropDownLarge";
import Navigation from "../components/Navigation/Navigation";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <Banner src="./pictures/banner2.png" />
      <DropDownLarge/>
    </div>
  );
};
export default About;
