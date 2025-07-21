// Common types for the Music Dashboard

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  audioUrl: string;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  followers: number;
  genres: string[];
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  releaseDate: string;
  coverUrl: string;
  songs: Song[];
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songs: Song[];
  isPublic: boolean;
  createdAt: string;
}

export interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  repeat: 'none' | 'one' | 'all';
  shuffle: boolean;
}

export interface SearchResults {
  songs: Song[];
  artists: Artist[];
  albums: Album[];
  playlists: Playlist[];
}

// Component Props Types
export interface SliderProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ComponentType;
}

export interface FooterControlsProps {
  playerState: PlayerState;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
