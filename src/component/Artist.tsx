import artistsData from "../data/Library/artist";

interface Artist {
  id: number;
  name: string;
  image: string;
  genres: string[];
  followers: number;
  popularity: number;
}

export function Artist() {
  return (
    <div className="artists-container">
      <div className="artists-grid">
        {artistsData.map(artist => (
          <div key={artist.id} className="artist-card">
            <div className="artist-image-container">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="artist-image" 
              />
            </div>
            <h3 className="artist-name">{artist.name}</h3>
            <p className="artist-followers">{(artist.followers / 1000000).toFixed(1)}M followers</p>
          </div>
        ))}
      </div>
    </div>
  );
}