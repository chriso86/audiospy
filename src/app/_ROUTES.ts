import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {ArtistComponent} from "./pages/artist/artist.component";
import {AlbumComponent} from "./pages/album/album.component";
import {AppResolver} from "./app.resolver";

export const ROUTES: Routes = [
  {
    path: '',
    resolve: {data: AppResolver},
    children: [
      {
        path: 'search',
        component: HomeComponent
      },
      {
        path: 'artist/:artistSlug',
        component: ArtistComponent
      },
      {
        path: 'artist/:artistSlug/album/:albumSlug',
        component: AlbumComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
