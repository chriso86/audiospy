import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, tap} from "rxjs/operators";
import {Store} from "@ngxs/store";
import {SearchSpotify} from "../../app-state/spotify/spotify.actions";
import {SearchSpotifyRequest} from "../gateways/spotify/interfaces/search/search-spotify.request";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewInit {
  public searchTerm: string;

  @ViewChild('appSearch') appSearch: ElementRef;

  constructor(private store: Store) { }

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.appSearch.nativeElement,'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged(),
        tap((text: string) => {
          const query = this.searchTerm;
          const request: SearchSpotifyRequest = {
            q: query,
            type: 'artist'
          };

          // Don't do anything if there is no search query (state retains last search results)
          if (!query) {
            return;
          }

          this.store.dispatch(new SearchSpotify(request))
        })
      )
      .subscribe();
  }
}
