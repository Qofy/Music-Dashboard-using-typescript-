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

const ProfileAndName = () => {
  return(
    <article className="profile-info"
    style={{display:"flex", gap:"1rem", marginBottom:"2rem", marginTop:"2.5rem"}}>
      <img className="p-image" style={{width:60,height:60, borderRadius:50}} src={Profil} alt="profile" />
      <p>@safo</p>
    </article>
  )
}


const Login = ({nameContext}:LoginProp) => {
  return(
    <aside className="login-buttons">
      <button style={{padding:".7rem", marginRight: ".5rem", color:"white", backgroundColor:"rgb(233, 63, 91)", fontSize:".7rem", fontWeight:600, borderRadius:"1rem", width:"9rem", border:"none"}}>
        {nameContext}
      </button>
    </aside>
  )
}