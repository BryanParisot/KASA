import { NavLink } from "react-router-dom";
import { useFetch } from "../../utils/hooks";

const Announcement = () => {
  const data = useFetch("./json/data.json");
  
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="announcement">
          <NavLink to={"/announce/" + item.id}>
            <p key={item.title}>{item.title}</p>
          </NavLink>
        </div>
      ))}
    </>
  );
};
export default Announcement;
