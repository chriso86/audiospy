import {Injectable} from "@angular/core";
import {access_key} from "../../../../../api_keys/ipstack.json";
import {BaseRestService} from "../base-rest.service";
import {Observable} from "rxjs";
import {GetIpstackLocationResponse} from "./interfaces/get-ipstack-location.response";
import {GetIpstackLocationRequest} from "./interfaces/get-ipstack-location.request";
import {HttpBackend, HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class IpstackGateway {
  private httpClient: HttpClient;
  private _baseUrl = 'http://api.ipstack.com'

  constructor( handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  getAuthForIpstack(): Observable<GetIpstackLocationResponse> {
    const url = `${this._baseUrl}/check`;
    const params = {'access_key': access_key};

    return this.httpClient.get<GetIpstackLocationResponse>(url, { params: params });
  }
}
