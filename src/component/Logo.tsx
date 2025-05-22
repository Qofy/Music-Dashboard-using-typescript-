import logo from "../images/african-music-logo.webp"
export const Logo = () => {
  return(
    <div className="logo-container" style={{marginTop:"3rem", marginBottom:"1.5rem"}}>
    <div>
      <img src={logo} width={60} alt="logo" /></div>
    <div className="logo-container__text">AfricanMusic</div>
    </div>
  )
} 