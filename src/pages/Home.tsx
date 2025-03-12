import { LeftContext } from "../context/LeftContext"
import { MiddleContext } from "../context/Middlecontext"
import { RightContext } from "../context/RightContex"
import "../scss/pages/home.scss"

export function Home(){
  return(
    <div className="home">
      <LeftContext/>
    <MiddleContext/>
    <RightContext/>
    </div>
  )
}