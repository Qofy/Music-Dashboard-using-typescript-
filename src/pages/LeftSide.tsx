import { Logo } from "../component/Logo"
import { LeftCm1 } from "../component/LeftCm1"
import { LeftCm2 } from "../component/LeftCm2"
import { Profile } from "../component/Profil"
export function LeftSide(){
  return(
    <div className="left-side">
    <Logo/>
    <LeftCm1/>
    <LeftCm2/>
    <Profile/>
    </div>
  )
}