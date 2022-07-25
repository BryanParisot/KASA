import { NavLink } from "react-router-dom";
import { useFetch } from "../../utils/hooks";

const Announcement = () => {
  const data = useFetch("./json/data.json");

  return (
    <>
      {data.map((item, index) => (
        <NavLink key={index} to={"/announce/" + item.id}>
          <div className="announcement">
            <img src={item.cover} alt="" />
            <p key={item.title}>{item.title}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
};
export default Announcement;
