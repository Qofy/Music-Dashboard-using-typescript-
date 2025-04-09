import "../scss/component/browse.scss"
import { latestMusicImg } from "../data/Browse/latestdata"
import { LatestMusic } from "../component/LatestMusic"


export function Browse (){  
  return(
    <div className="Ls-main-con">
      <LatestMusic header="Latest Hot Music" release={latestMusicImg}/>
      <LatestMusic header="Hotlis" release={latestMusicImg}/>
      <LatestMusic header="Trending" release={latestMusicImg}/>
      <LatestMusic header="Vibes Only" release={latestMusicImg}/>
      <LatestMusic header="Most Listen" release={latestMusicImg}/>
      <LatestMusic header="Afro Music" release={latestMusicImg}/>
      <LatestMusic header="Amapiano" release={latestMusicImg}/>
      <LatestMusic header="Best out of Rap" release={latestMusicImg}/>
      <LatestMusic header="Highlife" release={latestMusicImg}/>
      <LatestMusic header="Reggae" release={latestMusicImg}/>
      <LatestMusic header="Gospel" release={latestMusicImg}/>
      <LatestMusic header="Jam Music" release={latestMusicImg}/>
    </div>
  )
}


