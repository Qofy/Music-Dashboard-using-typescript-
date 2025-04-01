import { useNavigate } from "react-router-dom"
import { ReleaseContent } from "../component/NewRelease"
import "../scss/component/browse.scss"
export function Browse (){

  const lM1 = "https://source.boomplaymusic.com/group10/M00/08/20/fed1f839f0e34e1f87795f2103c8701c_464_464.webp";

  const lM2 = "https://source.boomplaymusic.com/group10/M00/09/14/f318f743017644ecb3aa07cdccae2219H930W930_464_464.webp";
  const lM3 = "https://source.boomplaymusic.com/group10/M00/09/18/bffccc11ff3b43b49e2d142547257aceH930W930_464_464.webp";
  const lM4 = "https://source.boomplaymusic.com/group10/M00/01/05/02f3f356d9754b1c9e17a97839669bd2_464_464.webp";
  const lM5 = "https://source.boomplaymusic.com/group10/M00/03/04/5a72fb191a114e58a55af75dc69db882_464_464.webp";
  const lM6 = "https://source.boomplaymusic.com/group10/M00/21/88/b4c6c945a4c54ae68d4b6140f610d37e_464_464.webp";

  const latestMusicImg= [lM1,lM2,lM3,lM4,lM5,lM6]

const lMartist = [
  {name:"Kuame Eugene"},
  {name:"Kidi"},
  {name:"Yhaw Hero"},
  {name:"Kwesi Amewuga Ft Medikal"},
  {name:"Kwesi Arthur"},
  {name:"StoneBwoy"},
  // {name:"Shatta Wale"},
];

  const navigate = useNavigate()
  return(
    <div className="Ls-main-con">
      <div>
        <h3>
          Latets Hot Music
        </h3>
          <ReleaseContent
          artistNames={lMartist} 
          rContainer="latest__content1" 
          img={latestMusicImg} 
           className1="release__title" 
          className="release__artist"
          releasetype="Release"
          imgName="r2"
          />
          <div>
          </div>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}