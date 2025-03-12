import { LeftSide } from "../pages/LeftSide";
import "../scss/context/leftcontext.scss"

export function LeftContext(){
  return(
    <div className="left-context">
      <LeftSide/>
    </div>
  )
}