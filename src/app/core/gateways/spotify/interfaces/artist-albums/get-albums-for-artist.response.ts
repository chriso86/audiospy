import {ArtistAlbumResponse} from "./artist-album.response";

export interface GetAlbumsForArtistResponse {
  href: string; // The link you just queried
  items: ArtistAlbumResponse[]; // The albums of the artist
}
