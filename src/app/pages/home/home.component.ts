import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {SpotifyState} from "../../app-state/spotify/spotify.state";
import {ArtistResponse} from "../../core/gateways/spotify/interfaces/search/artist.response";
import {Navigate} from "@ngxs/router-plugin";
import {ImageService} from "../../core/images/image.service";
import {ImageResponse} from "../../core/gateways/spotify/interfaces/image.response";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  @Select(SpotifyState.results) results$: Observable<ArtistResponse[]>;

  constructor(
    private store: Store,
    private imageService: ImageService
  ) {
  }

  getImageForArtist(images: ImageResponse[]) {
    return this.imageService.getImageForArtist(images);
  }

  selectArtist(event: MouseEvent, artist: ArtistResponse) {
    event.preventDefault();

    const artistId = artist.id;

    if (artistId) {
      this.store.dispatch(new Navigate([`/artist/${artistId}`]))
    }
  }
}
