import {ImageResponse} from "../image.response";
import {ArtistAlbumResponse} from "../artist-albums/artist-album.response";

export interface ArtistResponse {
  id: string; // Artist ID
  name: string; // Artist name
  type: string; // E.g. 'artist'
  external_urls: {
    spotify: string; // Full artist URL
  },
  genres: string[],
  images: ImageResponse[],
  popularity: number;

  // Extended state properties
  albums: ArtistAlbumResponse[];
}
