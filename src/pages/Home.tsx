import { LeftContext } from "../context/LeftContext"
// import { MiddleContext } from "../context/Middlecontext"
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
      {/* <div className="middle-container" style={{backgroundColor:"red", width:"100%", height:"70%"}}>
        <Outlet />
      </div> */}
      <Outlet/>
      <Footer/>
    </>
  );
}
