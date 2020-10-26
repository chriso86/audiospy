import {Resolve} from '@angular/router';
import {Injectable} from "@angular/core";
import {MarketService} from "./core/g11n/i18n/market.service";
import {Select, Store} from "@ngxs/store";
import {AuthorizeSpotify} from "./app-state/spotify/spotify.actions";
import {SpotifyState} from "./app-state/spotify/spotify.state";
import {Observable} from "rxjs";
import {mergeMap} from "rxjs/operators";

@Injectable()
export class AppResolver implements Resolve<any> {
  @Select(SpotifyState.token) access_token$: Observable<string>;

  constructor(
    private marketService: MarketService,
    private store: Store
  ) {
  }

  resolve(): Observable<any> {
    return this.store.dispatch(new AuthorizeSpotify())
      .pipe(
        mergeMap(() => this.marketService.getUserLocation())
      );
  }
}
