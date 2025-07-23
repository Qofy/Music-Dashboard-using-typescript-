import { NavLink } from "react-router-dom";
import { data1 } from "../data/LeftCmdata";
import { useMobileMenuContext } from "../pages/Home";
import { useIsMobile } from "../hooks/useMediaQuery";
import "../scss/component/leftcm1.scss";

export const LeftCm1 = () => {
  const mobileMenuContext = useMobileMenuContext();
  const isMobile = useIsMobile();

  const handleNavClick = () => {
    if (mobileMenuContext && isMobile) {
      setTimeout(() => {
        mobileMenuContext.close();
      }, 150);
    }
  };

  return (
    <div className="leftcm">
      {data1.map((data) => (
        <NavLink 
          to={data.path || "/"} 
          key={data.id}
          className={({ isActive }) => 
            isActive ? "leftcm__item leftcm__item--active" : "leftcm__item"
          }
          onClick={handleNavClick}
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
