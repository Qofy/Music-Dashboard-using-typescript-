import "../scss/pages/library.scss";
import { NavLink, Outlet } from "react-router-dom";
import { useMobileMenuContext } from "./Home";
import { useIsMobile } from "../hooks/useMediaQuery";

const libraryHeadStyl = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
  alignItems: "center"
};

const subConStyl = {
  marginTop: "4.4rem",
  marginBottom: "6rem",
};

export function Library() {
  const mobileMenuContext = useMobileMenuContext();
  const isMobile = useIsMobile();

  const handleLibraryNavClick = () => {
    if (mobileMenuContext && isMobile) {
      setTimeout(() => {
        mobileMenuContext.close();
      }, 150);
    }
  };

  return (
    <div className="library-container">
      <div className="library-sub__Container" style={subConStyl}>
        <h2 className="library-name">Library</h2>
        <div className="library__head" style={libraryHeadStyl}>
          <div className="library__p">
            <nav className="library-nav">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="artist"
                onClick={handleLibraryNavClick}
              >
                Artist
              </NavLink>
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="album"
                onClick={handleLibraryNavClick}
              >
                Album
              </NavLink>
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="songs"
                onClick={handleLibraryNavClick}
              >
                Songs
              </NavLink>
            </nav>
          </div>
          <p className="sort">Sort by Name</p>
        </div>
        
        
        <div className="library-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}





