import {NGXS_ACTION_CONTEXT} from "../../core/app-constants";
import {SpotifyActionEnum} from "./spotify-action.enum";
import {SearchSpotifyRequest} from "../../core/gateways/spotify/interfaces/search/search-spotify.request";
import {GetAlbumsForArtistRequest} from "../../core/gateways/spotify/interfaces/artist-albums/get-albums-for-artist.request";

export class AuthorizeSpotify {
  static readonly type = `${NGXS_ACTION_CONTEXT.App} ${SpotifyActionEnum.Authorize}`;

  constructor() {
  }
}

export class SearchSpotify {
  static readonly type = `${NGXS_ACTION_CONTEXT.Header} ${SpotifyActionEnum.SearchSpotify}`;

  constructor(public payload: SearchSpotifyRequest) {
  }
}

export class SelectArtistFromSearchResults {
  static readonly type = `${NGXS_ACTION_CONTEXT.Home} ${SpotifyActionEnum.SelectArtist}`;

  constructor(public payload: GetAlbumsForArtistRequest) {
  }
}

export class SelectArtistFromHistory {
  static readonly type = `${NGXS_ACTION_CONTEXT.Home} ${SpotifyActionEnum.SelectArtist}`;

  constructor(public payload: GetAlbumsForArtistRequest) {
  }
}
