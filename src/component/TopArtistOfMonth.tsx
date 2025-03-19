import { TopArtistOftheWeek } from "./TopArtistOftheWeek";
import { artistOfTheMonth } from "../data/TopArtist";

export function TopArtistOftheMonth() {
  return(
    <div>
      <TopArtistOftheWeek 
        title="Artist Of The Month" 
        artists={artistOfTheMonth}
        className="artist-of-month"
      />
    </div>
  );
}