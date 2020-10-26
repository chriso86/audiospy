import {Component, OnInit} from '@angular/core';
import {SelectArtistFromSearchResults} from "../../app-state/spotify/spotify.actions";
import {Actions, Select, Store} from "@ngxs/store";
import {Navigate, RouterState} from "@ngxs/router-plugin";
import {Observable} from "rxjs";
import {SpotifyState} from "../../app-state/spotify/spotify.state";
import {ArtistResponse} from "../../core/gateways/spotify/interfaces/search/artist.response";
import {ImageService} from "../../core/images/image.service";
import {ImageResponse} from "../../core/gateways/spotify/interfaces/image.response";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  // Selectors
  @Select(SpotifyState.albums) albums$: Observable<ArtistResponse[]>;

  constructor(
    private store: Store,
    private actions$: Actions,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const activatedRoute = this.activatedRoute;
    const path = activatedRoute.snapshot.url[0].path;
    const artistId = activatedRoute.snapshot.params && activatedRoute.snapshot.params['artistSlug'];

    if (path === 'artist') {
      if (!artistId) {
        // No valid artist ID found in the route params
        this.store.dispatch(new Navigate(['/search']));
      } else {
        // Get the artists albums for the artist ID found in the route params
        this.store.dispatch(new SelectArtistFromSearchResults({id: artistId}));
      }
    }
  }

  // Public methods
  getImageForArtist(images: ImageResponse[]) {
    return this.imageService.getImageForArtist(images);
  }
}
