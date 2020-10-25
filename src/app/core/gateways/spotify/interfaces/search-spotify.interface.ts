import {BaseSpotifyInterface} from "./base-spotify.interface";

export interface SearchSpotifyInterface extends BaseSpotifyInterface {
  query: string; // E.g. Muse
  types: string; // E.g. track,artist (comma-delimited list)
}
