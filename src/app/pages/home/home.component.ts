import {Component, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {SpotifyState} from "../../app-state/spotify/spotify.state";
import {ArtistResponse} from "../../core/gateways/spotify/interfaces/search/artist.response";
import {ImageResponse} from "../../core/gateways/spotify/interfaces/image.response";
import {BrowserHelper} from "../../helpers/browser.helper";
import {SCREEN_BREAKPOINTS} from "../../core/app-constants";
import {ArrayHelper} from "../../helpers/array.helper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  @Select(SpotifyState.results) results$: Observable<ArtistResponse[]>;

  constructor() {
  }

  ngOnInit(): void {
  }

  getImageForArtist(images: ImageResponse[]) {
    const browserWidth = BrowserHelper.getWidth();
    const isMobile = browserWidth <= SCREEN_BREAKPOINTS.sm;

    if (!images || !images.length) {
      return null;
    }

    const smallest = images.reduce((smallest: ImageResponse, image: ImageResponse) => {
      return image.width < smallest.width ? image : smallest;
    }, images[0]);

    if (smallest) {
      return smallest.url;
    }

    return false;
  }
}
