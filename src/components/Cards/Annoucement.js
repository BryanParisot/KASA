import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Announcement = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("./json/data.json").then((res) => setData(res.data));
  }, []);

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
