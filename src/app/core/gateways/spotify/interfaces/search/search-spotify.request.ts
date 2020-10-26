import {BaseSpotifyRequest} from "../base-spotify.request";

export interface SearchSpotifyRequest extends BaseSpotifyRequest {
  q: string; // E.g. Muse
  type: string; // E.g. track,artist (comma-delimited list)
}
