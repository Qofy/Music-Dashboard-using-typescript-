import songsData from "../data/Library/songs";
import { useState } from "react";
export function Songs() {
  const [hoveredSong, setHoveredSong] = useState<number | null>(null);

  return (
    <div className="songs-container">
      <div className="songs-header">
        <div className="song-number">#</div>
        <div className="song-info">TITLE</div>
        <div className="song-album">ALBUM</div>
        <div className="song-duration">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.5V8L11 10.5M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" 
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="songs-list">
        {songsData.map((song, index) => (
          <div 
            key={song.id} 
            className="song-row"
            onMouseEnter={() => setHoveredSong(song.id)}
            onMouseLeave={() => setHoveredSong(null)}
          >
            <div className="song-number">
              {hoveredSong === song.id ? (
                <button className="play-button-small">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3V13L13 8L5 3Z" fill="currentColor"/>
                  </svg>
                </button>
              ) : (
                index + 1
              )}
            </div>
            <div className="song-info">
              <img src={song.image} alt={song.title} className="song-image" />
              <div className="song-details">
                <div className="song-title">{song.title}</div>
                <div className="song-artist">{song.artist}</div>
              </div>
            </div>
            <div className="song-album">{song.album}</div>
            <div className="song-duration">{song.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}