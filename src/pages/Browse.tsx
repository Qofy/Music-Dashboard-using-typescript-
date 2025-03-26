import { useNavigate } from "react-router-dom"
import { LeftSide } from "./LeftSide"
import { RightSide } from "./RightSide"
export function Browse (){
  const navigate = useNavigate()
  return(
    <div>
      <LeftSide/>
      <RightSide/>
      browse
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}