import { LeftContext } from "./context/LeftContext"
import { MiddleContext } from "./context/Middlecontext"
import { RightContext } from "./context/RightContex"
import "./scss/pages/home.scss"

function App() {

  return (
    <div className="home">
    <LeftContext/>
    <MiddleContext/>
    <RightContext/>
    </div>
  )
}

export default App
