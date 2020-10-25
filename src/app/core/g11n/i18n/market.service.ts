import {Injectable} from "@angular/core";
import {geoip2} from "../../../../main";

@Injectable()
export class MarketService {
  private _country_code: string;

  public async getUserLocation(): Promise<any> {
    return geoip2.country((response: { country: { iso_code: string }}) => {
      if (response && response.country && response.country.iso_code) {
        this._country_code = response.country.iso_code;
      }
    }, (error) => {
      throw new Error('Failed to load the user\'s location');
    });
  }

  public getCountryCode(): string {
    return this._country_code;
  }
}
