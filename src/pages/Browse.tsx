import { ReleaseContent } from "../component/NewRelease"
import "../scss/component/browse.scss"
import { latestMusicImg } from "../data/Browse/latestdata"
import { lMartist } from "../data/Browse/latestdata"

export function Browse (){  
  return(
    <div className="Ls-main-con">
      <LastestMusic header="Latest Hot Music" release={latestMusicImg}/>
      <LastestMusic header="Hotlis" release={latestMusicImg}/>
      <LastestMusic header="Trending" release={latestMusicImg}/>
      <LastestMusic header="Vibes Only" release={latestMusicImg}/>
      <LastestMusic header="Most Listen" release={latestMusicImg}/>
      <LastestMusic header="Afro Music" release={latestMusicImg}/>
      <LastestMusic header="Amapiano" release={latestMusicImg}/>
      <LastestMusic header="Best out of Rap" release={latestMusicImg}/>
      <LastestMusic header="Highlife" release={latestMusicImg}/>
      <LastestMusic header="Reggae" release={latestMusicImg}/>
      <LastestMusic header="Gospel" release={latestMusicImg}/>
      <LastestMusic header="Jam Music" release={latestMusicImg}/>
    </div>
  )
}

type LastestMusicProp = {
  header: string;
  release: string[];
};

export function LastestMusic({header, release}: LastestMusicProp){
  return(
    <div>
      <div>
        <h3>
          {header}
        </h3>
          <ReleaseContent
          artistNames={lMartist} 
          rContainer="latest__content1" 
          img={release} 
          className1="release__title" 
          className="release__artist"
          releasetype="Release"
          imgName="r2"
          />
          <div>
          </div>
      </div>
    </div>
  )
}