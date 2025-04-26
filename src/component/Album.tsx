import albumsData from "../data/Library/album";

interface Album {
  id: number;
  title: string;
  artist: string;
  image: string;
  year: number;
  tracks: number;
}
export function Album() {
  return (
    <div className="albums-container">
      <div className="albums-grid">
        {albumsData.map(album => (
          <div key={album.id} className="album-card">
            <div className="album-image-container">
              <img 
                src={album.image} 
                alt={album.title} 
                className="album-image" 
              />
              <div className="album-overlay">
                <button className="play-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="album-info">
              <h3 className="album-title">{album.title}</h3>
              <p className="album-artist">{album.artist}</p>
              <div className="album-details">
                <span className="album-year">{album.year}</span>
                <span className="album-tracks">{album.tracks} tracks</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}