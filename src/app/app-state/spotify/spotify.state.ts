import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AuthorizeSpotify, SearchSpotify, SelectArtistFromSearchResults} from "./spotify.actions";
import {SearchSpotifyResponse} from "../../core/gateways/spotify/interfaces/search/search-spotify.response";
import {SpotifyGateway} from "../../core/gateways/spotify/spotify.gateway";
import {ArtistResponse} from "../../core/gateways/spotify/interfaces/search/artist.response";
import {GetAlbumsForArtistResponse} from "../../core/gateways/spotify/interfaces/artist-albums/get-albums-for-artist.response";
import {patch, updateItem} from "@ngxs/store/operators";
import {tap} from "rxjs/operators";

export class SpotifyStateModel {
  public access_token: string;
  public results: ArtistResponse[];
}

const defaults = {
  access_token: '',
  results: []
};

@State<SpotifyStateModel>({
  name: 'audioSpy',
  defaults
})
@Injectable()
export class SpotifyState {
  constructor(private spotifyGateway: SpotifyGateway) {
  }

  @Selector()
  public static token(state: SpotifyStateModel) {
    return state.access_token;
  }

  @Selector()
  public static results(state: SpotifyStateModel) {
    return state.results;
  }

  @Action(AuthorizeSpotify)
  authorizeSpotify({getState, setState}: StateContext<SpotifyStateModel>) {
    const state = getState();

    return this.spotifyGateway.getToken()
      .pipe(
        tap((response: { access_token: string }) => {
          setState({
            ...state,
            access_token: response.access_token
          });
        })
      );
  }

  @Action(SearchSpotify)
  searchSpotify({getState, setState}: StateContext<SpotifyStateModel>, {payload}: SearchSpotify) {
    const state = getState();
    const {q, type, offset} = payload;

    this.spotifyGateway.searchSpotify(q, type, offset)
      .subscribe((response: SearchSpotifyResponse) => {
        setState({
          ...state,
          results: response.artists.items
        });
      });
  }

  @Action(SelectArtistFromSearchResults)
  getArtistAlbumsByArtistId({getState, setState}: StateContext<SpotifyStateModel>, {payload}: SelectArtistFromSearchResults) {
    const state = getState();
    const {id, offset} = payload;

    this.spotifyGateway.getArtistAlbumsByArtistId(id, offset)
      .subscribe((response: GetAlbumsForArtistResponse) => {
        patch({
          ...state,
          results: updateItem<ArtistResponse>(
            (artist: ArtistResponse) => artist.id === id,
            patch({albums: response.items})
          )
        })
      });
  }
}
