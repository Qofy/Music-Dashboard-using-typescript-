import Profil from"../images/profile.jpg"
type LoginProp ={
  nameContext: string
}
export const Profile = () => {
  return(
    <section className="profile-container" style={{marginBottom:"5rem"}}>
      <ProfileAndName/>
      <div style={{display:"flex"}}>
      <Login nameContext="Auto Login"/>
      <Login nameContext="Switc Account"/>
      </div>
    </section>
  )
}
const pflInfoStyle={
  display:"flex", 
  gap:"1rem", 
  marginBottom:"2rem", 
  marginTop:"2.5rem",
  alignItems:"center"
}
const lgBtnStyle={padding:".7rem", 
  marginRight: ".5rem", 
  color:"white", 
  backgroundColor:"rgb(233, 63, 91)", 
  fontSize:"1.3rem", 
  fontWeight:600, 
  borderRadius:"1rem", 
  width:"14rem", 
  border:"none"}

const pimgStyle= {
  width:80,
  height:80,
  borderRadius:50,
  display:"flex",
}

const pStyle = {
fontSize: "2.3rem",
}
const ProfileAndName = () => {
  return(
    <article className="profile-info" style={pflInfoStyle}>
      <img className="p-image" style={pimgStyle} src={Profil} alt="profile" />
      <p style={pStyle}>@safo</p>
    </article>
  )
}


const Login = ({nameContext}:LoginProp) => {
  return(
    <aside className="login-buttons">
      <button style={lgBtnStyle}>
        {nameContext}
      </button>
    </aside>
  )
}