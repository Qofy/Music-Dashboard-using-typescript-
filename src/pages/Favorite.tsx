import { favoriteList } from "../data/favourite"
import "../scss/pages/favorite.scss";
import { Head2 } from "../component/Head2";
import { Btns } from "../component/Btns";

const mainContanerStyle= {
  paddingTop: "3.6rem"
}

export function Favorite (){
  return(
    <div style={mainContanerStyle}>
    <Btns/>
    <Head2/>
      <section className="favorite-section">
        {favoriteList.map((data)=>{
          return(
            <div key={data.id} className="favorite-item">
              <div className="txt">
                <p className="name">
                  {data.name} 
                </p>
                <p className="song-title">
                  {data.songName}
                </p>
              </div>
              <div className="favorite-btn">
                {data.controlButtons.map((Button, index) => (
                  <Button key={index} />
                ))}
              </div>
              <div className="time">{data.plyLength}</div>
            </div>
          )
        })}
      </section>
    </div>
  )
}



