import {data1} from "../data/LeftCmdata" 
import "../scss/component/leftcm1.scss"

export const LeftCm1 = () => {
  return (
    <div className="leftcm">
      {data1.map((data )=>{
        return(
          <div className="leftcm__item" key={data.id} style={{display:"flex", flexDirection:"row"}}>
            <div className="leftcm__icon">
              <data.img />
            </div>
            <p className="leftcm__text">{data.txt}</p>
          </div>
        )
      })}
    </div>
  )
}