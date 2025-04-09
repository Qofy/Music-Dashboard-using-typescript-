import { favoriteList } from "../data/favourite"
import "../scss/pages/favorite.scss"

export function Favorite (){
  return(
      <section className="favorite-section">
        {favoriteList.map((data)=>{
          return(
            <div key={data.id} className="favorite-item">
              <div>{data.name}</div>
              <div>{data.songName}</div>
              <div className="favorite-btn">
                {data.controlButtons.map((Button, index) => (
                  <Button key={index} />
                ))}
                <div>{data.plyLength}</div>
              </div>
            </div>
          )
        })}
      </section>
  )
}