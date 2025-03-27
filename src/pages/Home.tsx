import { LeftContext } from "../context/LeftContext"
// import { MiddleContext } from "../context/Middlecontext"
import { RightContext } from "../context/RightContex"
import { Outlet } from "react-router-dom";
import "../scss/pages/home.scss"
import { Footer } from "../component/Footer";

export function Home(){
  return(
    <div className="home">
    <Layout/>
    </div>
  )
}

export function Layout() {
  return (
    <>
      <LeftContext />
      <div className="middle-container">
        <Outlet />
      </div>
      <RightContext />
      <Footer/>
    </>
  );
}
