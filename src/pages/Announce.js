import { useParams } from "react-router-dom";
import Slider from "../components/Caroussel/Slider";
import Chips from "../components/Chips/Chips";
import DropDownLitlle from "../components/DropDown/DropDownLittle";
import Navigation from "../components/Navigation/Navigation";
import Profils from "../components/Profil/Profils";
import { useFetch } from "../utils/hooks";

const Announce = () => {
  const { id } = useParams();
  const datas = useFetch("../json/data.json");

  return (
    <div className="announce">
      <Navigation />
      {datas.map((item) =>
        item.id === id ? (
          <div>
            <Slider images={item.pictures} />
            <div className="contain_more_information">
              <div className="contain_title_subtitle">
                <h2>{item.title}</h2>
                <p>{item.location}</p>
                <div className="contain_chips">
                  {item.tags.map((i) => (
                    <Chips text={i} />
                  ))}
                </div>
              </div>

              <div className="contain_profil">
                <Profils name={item.host.name} img={item.host.picture} />
              </div>
            </div>

            <div className="contain_dropdown">
              <DropDownLitlle title="description" content={item.description} />
              <DropDownLitlle title="equipments" equipement={item.equipments} />
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
export default Announce;
