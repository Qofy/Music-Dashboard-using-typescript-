import "../scss/pages/favorite.scss";
import { Btns } from "../component/Btns";
import { Songs } from "../component/Songs";

const mainContanerStyle= {
  paddingTop: "3.6rem"
}

export function Favorite (){
  return(
    <div style={mainContanerStyle}>
    <Btns/>
    {/* <Head2/> */}
      <section className="favorite-section">
        <Songs/>
      </section>
    </div>
  )
}



