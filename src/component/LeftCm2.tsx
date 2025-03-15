import { data2 } from "../data/LeftCmdata"
import "../scss/component/leftcm2.scss"
export const LeftCm2 = () => {
  return(
    <div className="leftcm2">
      {data2.map((data, key) => {
        if (key === 0 && typeof data !== 'string'){
          return(
            <div key={key} className="leftcm2__item">
              <p className="leftcm2__text">{data.txt}</p>
              <div className="leftcm2__image">
                <data.img/>
              </div>
            </div>
          )
        }else{
          return(
            <div key={key} className="leftcm2__playlist-item">
              <p className="leftcm2__playlist-text">{data.toString()}</p>
            </div>
          )
        }
      })}
    </div>
  )
}