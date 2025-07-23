import { Logo } from "../component/Logo"
import { LeftCm1 } from "../component/LeftCm1"
import { LeftCm2 } from "../component/LeftCm2"
import { Profile } from "../component/Profil"
import "../scss/pages/left.scss"

export function LeftSide(){
  return(
    <div className="left-side">
      <div className="left-side__navigation">
        <Logo/>
        <LeftCm1/>
        <LeftCm2/>
      </div>
      <div className="left-side__profile">
        <Profile/>
      </div>
    </div>
  )
}