import { LeftSide } from "../pages/LeftSide";
import "../scss/context/leftcontext.scss"

export function LeftContext(){
  return(
    <div className="left-context" style={{padding:"0 .5rem"}}>
      <LeftSide/>
    </div>
  )
}