import {NgModule} from "@angular/core";
import {NgxsModule} from "@ngxs/store";
import {NgxsRouterPluginModule, RouterStateSerializer} from "@ngxs/router-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {SpotifyState} from "../app-state/spotify/spotify.state";
import {environment} from "../../environments/environment";
import {CustomRouterStateSerializer} from "./router/custom-router-state.serializer";

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
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    }
  ]
})
export class AppNgxsModule {
}
