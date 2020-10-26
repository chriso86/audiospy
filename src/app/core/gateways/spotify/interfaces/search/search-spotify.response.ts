import {PagedResponse} from "../paged.response";
import {ArtistResponse} from "./artist.response";

export interface SearchSpotifyResponse extends PagedResponse {
  artists: {
    href: string; // The link you just queried
    items: ArtistResponse[] // List of artists
  }
}
