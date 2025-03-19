import { Artist } from "../data/types";
import { artistOfTheWeek } from "../data/TopArtist";
import "../scss/component/topArtistOftheweek.scss";

interface TopArtistProps {
  title: string;
  artists: Artist[];
  className?: string;
}

export function TopArtistOftheWeek({ 
  title = "Artist Of The Week", 
  artists = artistOfTheWeek, 
  className = "" 
}: TopArtistProps) {
  return(
    <div className={`top-artist-container ${className}`}>
      <h3 className="rank-title">{title}</h3>
      {artists.map((artist) => (
        <div key={artist.position} className="artistoftheweek">
          <p className="position">{artist.position}</p>
          <p className="name">{artist.name}</p>
          <p className="song">{artist.song}</p>
          {artist.img && <img src={artist.img} alt={artist.song} />}
        </div>
      ))}
          <p>See more</p>

    </div>
  );
}