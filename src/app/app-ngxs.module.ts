import {NgModule} from "@angular/core";
import {NgxsModule} from "@ngxs/store";
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {SpotifyState} from "./app-state/spotify/spotify.state";
import {environment} from "../environments/environment";

@NgModule({
  imports: [
    NgxsModule.forRoot([SpotifyState], { developmentMode: !environment.production }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  exports: [
    NgxsModule,
    NgxsRouterPluginModule,
    NgxsReduxDevtoolsPluginModule
  ]
})
export class AppNgxsModule {
}
