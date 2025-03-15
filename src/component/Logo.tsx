import logo from "/public/music.jpeg"
export const Logo = () => {
  return(
    <div className="logo-container">
    <div>
      <img src={logo} width={60} alt="logo" /></div>
    <div className="logo-container__text">AfricanMusic</div>
    </div>
  )
} 