import { useNavigate } from "react-router-dom"
export function Library (){
  const navigate = useNavigate()
  return(
    <div>
      library
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}