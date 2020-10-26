import {NgModule} from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {SpotifyGateway} from "./gateways/spotify/spotify.gateway";
import {IpstackGateway} from "./gateways/ipstack/ipstack.gateway";
import {MarketService} from "./g11n/i18n/market.service";
import {MatInputModule} from "@angular/material/input";
import {BaseRestService} from "./gateways/base-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    HttpClientModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    SpotifyGateway,
    IpstackGateway,
    MarketService,
    BaseRestService
  ]
})
export class CoreModule {
}
