import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthorizeSpotify} from "./app-state/spotify/spotify.actions";
import {SpotifyState} from "./app-state/spotify/spotify.state";
import {MarketService} from "./core/g11n/i18n/market.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @Select(SpotifyState.token) access_token$: Observable<string>;

  loaded: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  isLoading: boolean = false;

  constructor(
    private marketService: MarketService,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new AuthorizeSpotify())
      .subscribe(() => {
        this.loaded.next(this.loaded.getValue() + 1);
      })

    this.marketService.getUserLocation()
      .subscribe((result: { country_code: string }) => {
        this.loaded.next(this.loaded.getValue() + 1);
      });

    this.loaded.subscribe((count: number) => this.isLoading = count < 2);
  }
}
