import { NavLink } from "react-router-dom";
import { data1 } from "../data/LeftCmdata";
import "../scss/component/leftcm1.scss";

export const LeftCm1 = () => {
  return (
    <div className="leftcm">
      {data1.map((data) => (
        <NavLink 
          to={data.path || "/"} 
          key={data.id}
          className={({ isActive }) => 
            isActive ? "leftcm__item leftcm__item--active" : "leftcm__item"
          }
        >
          <div className="leftcm__icon">
            <data.img />
          </div>
          <p className="leftcm__text">{data.txt}</p>
        </NavLink>
      ))}
    </div>
  );
};
