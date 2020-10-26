import {Injectable} from '@angular/core';
import {State} from '@ngxs/store';
import {ArtistResponse} from "../../../core/gateways/spotify/interfaces/search/artist.response";
import {GetAlbumsForArtistResponse} from "../../../core/gateways/spotify/interfaces/artist-albums/get-albums-for-artist.response";
import {CacheableDataItemInterface} from "../../../core/cache/interfaces/cacheable-data-item.interface";

export class SpotifyHistoryStateModel {
  public cachedResults: CacheableDataItemInterface<ArtistResponse>[];
  public cachedArtistAlbums: CacheableDataItemInterface<GetAlbumsForArtistResponse>[];
  public cachedAlbums: CacheableDataItemInterface<GetAlbumsForArtistResponse>[];
}

const defaults = {
  cachedResults: [],
  cachedArtistAlbums: [],
  cachedAlbums: []
};

@State<SpotifyHistoryStateModel>({
  name: 'spotifyHistory',
  defaults
})
@Injectable()
export class SpotifyHistoryState {
  // @Action(AddSpotifySearchHistoryItem)
  // add({ getState, setState }: StateContext<SpotifyHistoryStateModel>, { payload }: AddSpotifySearchHistoryItem) {
  //   const state = getState();
  //   setState({ items: [ ...state.items, payload ] });
  // }
}
