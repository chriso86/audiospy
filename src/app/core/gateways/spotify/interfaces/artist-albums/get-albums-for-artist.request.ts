import {BaseSpotifyRequest} from "../base-spotify.request";

export interface GetAlbumsForArtistRequest extends BaseSpotifyRequest {
  id?: string; // 'id' is a path parameter, not a query parameter and so it's optional for our state API
  include_groups?: string;
}
