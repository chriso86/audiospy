// Map the router snapshot to { url, params, queryParams }
import {RouterStateSerializer} from "@ngxs/router-plugin";
import {RouterStateParams} from "./router-state-params.interface";
import {RouterStateSnapshot} from "@angular/router";

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateParams> {
  serialize(routerState: RouterStateSnapshot): RouterStateParams {
    const {
      url,
      root: { queryParams }
    } = routerState;

    let { root: route } = routerState;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { params } = route;

    return { url, params, queryParams };
  }
}
