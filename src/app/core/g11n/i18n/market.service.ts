import {Injectable} from "@angular/core";
import {IpstackGateway} from "../../gateways/ipstack/ipstack.gateway";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable()
export class MarketService {
  private _country_code: string;

  constructor(private ipstackGateway: IpstackGateway) {
  }

  public getUserLocation(): Observable<{ country_code: string }> {
    return this.ipstackGateway.getAuthForIpstack()
      .pipe(
        tap((response: { country_code: string }) => {
          if (!response || !response.country_code) {
            throw new Error('Could not load a valid country code matching this IP Address');
          }

          this._country_code = response.country_code;
        })
      );
  }

  public getCountryCode(): string {
    return this._country_code;
  }
}
