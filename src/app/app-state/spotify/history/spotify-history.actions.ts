import {NGXS_ACTION_CONTEXT} from "../../../core/app-constants";
import {SpotifyHistoryActionEnum} from "./spotify-history-action.enum";
import {SearchSpotifyRequest} from "../../../core/gateways/spotify/interfaces/search/search-spotify.request";

export class AddSpotifySearchHistoryItem {
  static readonly type = `${NGXS_ACTION_CONTEXT.Header} ${SpotifyHistoryActionEnum.AddSearchToHistory}`;

  constructor(public payload: SearchSpotifyRequest) {
  }
}
