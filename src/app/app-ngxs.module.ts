import {NgModule} from "@angular/core";
import {NgxsModule} from "@ngxs/store";
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";

@NgModule({
  imports: [
    NgxsModule.forRoot([]),
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
