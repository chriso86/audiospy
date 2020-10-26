import {Injectable} from "@angular/core";
import {access_key} from "../../../../../api_keys/ipstack.json";
import {BaseRestService} from "../base-rest.service";
import {Observable} from "rxjs";
import {GetIpstackLocationResponse} from "./interfaces/get-ipstack-location.response";
import {GetIpstackLocationRequest} from "./interfaces/get-ipstack-location.request";

@Injectable()
export class IpstackGateway {
  private _baseUrl = 'http://api.ipstack.com'

  constructor(private baseRestService: BaseRestService) {
  }

  getAuthForIpstack(): Observable<GetIpstackLocationResponse> {
    const url = `${this._baseUrl}/check`;
    const params = {access_key};

    return this.baseRestService.get<GetIpstackLocationRequest , GetIpstackLocationResponse>(url, params);
  }
}
