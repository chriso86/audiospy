import {BaseRestService} from "../base-rest.service";
import {SearchSpotifyRequest} from "./interfaces/search/search-spotify.request";
import {MarketService} from "../../g11n/i18n/market.service";
import {PAGE_SIZE} from "../../app-constants";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SearchSpotifyResponse} from "./interfaces/search/search-spotify.response";
import {GetAlbumsForArtistResponse} from "./interfaces/artist-albums/get-albums-for-artist.response";
import {GetAlbumsForArtistRequest} from "./interfaces/artist-albums/get-albums-for-artist.request";
import {client_id, client_secret} from '../../../../../api_keys/spotify.json';
import {HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class SpotifyGateway {
  private _baseUrl: string = 'https://api.spotify.com/v1';

  constructor(
    private baseRestService: BaseRestService,
    private marketService: MarketService
  ) {
  }

  getToken(): Observable<{ access_token: string }> {
    const url = 'https://accounts.spotify.com/api/token';

    const params = new URLSearchParams();

    params.set('grant_type', 'client_credentials');

    const body = params.toString();
    const baseEncodedClient = btoa(`${client_id}:${client_secret}`);
    const headers = new HttpHeaders({
      'Authorization': `Basic ${baseEncodedClient}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.baseRestService.post<string, { access_token: string }>(url, body, null, headers);
  }

  searchSpotify(query: string, types: string, offset: number): Observable<SearchSpotifyResponse> {
    const url = `${this._baseUrl}/search`;
    const options: SearchSpotifyRequest = {
      q: query,
      type: types,
      market: this.marketService.getCountryCode(),
      limit: PAGE_SIZE,
      offset: offset || 0
    };

    return this.baseRestService.get<SearchSpotifyRequest, SearchSpotifyResponse>(url, options);
  }

  getArtistAlbumsByArtistId(id: string, offset: number): Observable<GetAlbumsForArtistResponse> {
    const url = `${this._baseUrl}/artists/${id}/albums`
    const options: GetAlbumsForArtistRequest = {
      market: this.marketService.getCountryCode(),
      limit: PAGE_SIZE,
      offset: (offset)
    };

    return this.baseRestService.get<GetAlbumsForArtistRequest, GetAlbumsForArtistResponse>(url, options);
  }
}
