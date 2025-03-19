import { TopArtistOftheWeek } from "./TopArtistOftheWeek";
import { upComingArtist } from "../data/TopArtist";
import "../scss/component/topArtistOftheweek.scss";

export function TopupComingArtist() {
  return(
    <div>
      <TopArtistOftheWeek 
        title="Upcoming Artists" 
        artists={upComingArtist}
        className="upcoming-artists"
      />
    </div>
  );
}