import {ArtistInfoResponse} from "./artist-info.response";
import {ImageResponse} from "../image.response";

export interface ArtistAlbumResponse {
  id: string; // Album ID
  name: string; // Album name
  release_date: string; // Release date as string (Not date because localization issues can occur)
  release_date_precision: string; // E.g. 'day'
  type: string; // E.g. 'album' or 'single'
  album_group: string; // E.g. 'album' or 'single'
  album_type: string; // E.g. 'album' or 'single'
  artists: ArtistInfoResponse[], // Artist information
  external_urls: {
    spotify: string; // Full album URL
  },
  href: string; // API URL
  uri: string; // Spotify URI - E.g. "spotify:album:6KtvhS9fLM6hoH2bPJ9Mwf"
  images: ImageResponse[]; // Images of different sizes for albums
  total_tracks: number; // Tracks count
}
