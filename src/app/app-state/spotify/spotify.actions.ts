import {NGXS_ACTION_CONTEXT} from "../../core/app-constants";
import {SpotifyActionEnum} from "./spotify-action.enum";
import {SearchSpotifyInterface} from "../../core/gateways/spotify/interfaces/search-spotify.interface";

export class SearchSpotify {
  static readonly type = `${NGXS_ACTION_CONTEXT.Header} ${SpotifyActionEnum.SearchSpotify}`;

  constructor(public payload: SearchSpotifyInterface) {
  }
}

export class SelectArtistFromSearchResults {
  static readonly type = `${NGXS_ACTION_CONTEXT.Home} ${SpotifyActionEnum.SelectArtist}`;

  constructor(public payload: SearchSpotifyInterface) {
  }
}

export class SelectArtistFromHistory {
  static readonly type = `${NGXS_ACTION_CONTEXT.Home} ${SpotifyActionEnum.SelectArtist}`;

  constructor(public payload: SearchSpotifyInterface) {
  }
}
