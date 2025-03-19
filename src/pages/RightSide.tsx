import { TopArtistOftheMonth } from "../component/TopArtistOfMonth";
import { TopArtistOftheWeek } from "../component/TopArtistOftheWeek";
import { TopupComingArtist } from "../component/TopupComingArtist";
import { artistOfTheWeek } from "../data/TopArtist";
import "../scss/pages/right.scss"

export function RightSide() {
  return(
    <div className="right-side" >
      <TopArtistOftheWeek title="Top Artists This Week" artists={artistOfTheWeek}/>
      <TopArtistOftheMonth />
      <TopupComingArtist/>
    </div>
  );
}