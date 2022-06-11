import Banner from "../components/Banner/Banner";
import Navigation from "../components/Navigation/Navigation";

const Home = () => {
    return(
        <div>
            <Navigation/>
            <Banner src="./pictures/banner1.png" title="Chez vous, partout et ailleurs" />
        </div>
    );
};
export default Home