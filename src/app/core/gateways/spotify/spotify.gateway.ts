import {BaseRestService} from "../base-rest.service";
import {SearchTypeEnum} from "./search-type.enum";
import {SearchSpotifyInterface} from "./interfaces/search-spotify.interface";
import {MarketService} from "../../g11n/i18n/market.service";
import {PAGE_SIZE} from "../../app-constants";

export class SpotifyGateway {
  private _baseUrl: string = 'https://api.spotify.com/v1';

  constructor(
    private baseRestService: BaseRestService,
    private marketService: MarketService
  ) {
  }

  search(query: string, types: SearchTypeEnum[] = [], currentPageNo: number) {
    const url = `${this._baseUrl}/search`;
    const options: SearchSpotifyInterface = {
      query,
      types: types.length && types.join(','),
      market: this.marketService.getCountryCode(),
      limit: PAGE_SIZE,
      offset: (PAGE_SIZE * currentPageNo)
    };

    this.baseRestService.get<SearchSpotifyInterface, any>(url, options)
  }
}
