import { LeftContext } from "../context/LeftContext"
import { Outlet } from "react-router-dom";
import "../scss/pages/home.scss"
import { Footer } from "../component/Footer";
import { MobileMenuToggle, useMobileMenu } from "../component/MobileMenuToggle";
import { createContext, useContext } from "react";

const MobileMenuContext = createContext<{ close: () => void } | null>(null);

export const useMobileMenuContext = () => {
  const context = useContext(MobileMenuContext);
  return context;
};

export function Home(){
  return(
    <div className="home">
      <Layout/>
    </div>
  )
}

export function Layout() {
  const { isOpen, toggle, close } = useMobileMenu();
  
  return (
    <MobileMenuContext.Provider value={{ close }}>
      <MobileMenuToggle isOpen={isOpen} onToggle={toggle} />
      {isOpen && <div className="mobile-menu-overlay" onClick={close} />}
      <div className={`left-context-wrapper ${isOpen ? 'open' : ''}`}>
        <LeftContext />
      </div>
      <main className="main-content">
        <Outlet/>
      </main>
      <Footer/>
    </MobileMenuContext.Provider>
  );
}
