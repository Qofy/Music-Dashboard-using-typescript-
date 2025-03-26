import { useNavigate } from "react-router-dom"
export function Favorite (){
  const navigate = useNavigate()
  return(
    <div>
      favorite
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}