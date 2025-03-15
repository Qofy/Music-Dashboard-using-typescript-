import Profil from"../images/profile.jpg"
export const Profile = () => {
  return(
    <section className="profile-container">
      <ProfileAndName/>
      <Login/>
    </section>
  )
}

const ProfileAndName = () => {
  return(
    <article className="profile-info"
    style={{display:"flex", gap:"1rem", marginBottom:"2rem", marginTop:"2.5rem"}}>
      <img className="p-image" style={{width:60,height:60, borderRadius:50}} src={Profil} alt="profile" />
      <p>@safo</p>
    </article>
  )
}

const Login = () => {
  return(
    <aside className="login-buttons">
      <button style={{padding:".7rem 2rem", marginRight: ".5rem", color:"white", backgroundColor:"rgb(233, 63, 91)", fontSize:".8rem", fontWeight:600, borderRadius:"1rem"}}>
        Auto Login
      </button>

      <button style={{padding:".7rem 2rem",  color:"white", backgroundColor:"rgb(233, 63, 91)", fontSize:".8rem", fontWeight:600, borderRadius:"1rem"}}>
        Switch Account
      </button>
    </aside>
  )
}