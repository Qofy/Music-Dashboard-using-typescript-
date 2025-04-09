import { ReleaseContent } from "../component/NewRelease"
import { lMartist } from "../data/Browse/latestdata"


type LastestMusicProp = {
  header: string;
  release: string[];
};

export function LatestMusic({header, release}: LastestMusicProp){
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