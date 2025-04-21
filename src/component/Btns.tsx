import { Play,SquarePlus,Download } from "lucide-react";

// interface BtnsProps {
//   Play?: React.ComponentType;
//   Download?: React.ComponentType;
//   SquarePlus?: React.ComponentType;
// }
const styleBtnsContainer = {
display: "flex",
gap: "2rem"
}
const styleBtns1= {
 padding:".5rem 3rem",
 display: "flex",
 alignItems:"center",
 color: "white",
 backgroundColor:"rgb(233, 63, 91)",
 gap:".2rem",
 border:"none",
}

const styleBtns2= {
  display: "flex",
  alignItems:"center",
  color: "white",
  backgroundColor:"rgb(233, 63, 91)",
  gap:".2rem",
 border:"none",
 }

export function Btns() {
  return(
    <div style={styleBtnsContainer}>
      <button style={styleBtns1}>
        <span><Play/></span>
        Play All
        </button> 
      <button style={styleBtns1}>
        <span><SquarePlus/></span>
        Add to Playlist
        </button>
      <button style={styleBtns2}>
        <span><Download/></span>
        </button>
    </div>
  )
}