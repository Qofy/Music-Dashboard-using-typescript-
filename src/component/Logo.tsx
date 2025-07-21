import logo from "../images/african-music-logo.webp"

export const Logo = () => {
  return(
    <div className="logo-container">
      <img src={logo} alt="African Music Logo" />
      <div className="logo-container__text">AfricanMusic</div>
    </div>
  )
} 