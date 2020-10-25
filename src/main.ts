import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// There is no TypeScript support for this library, so we use it's JavaScript equivalent off the document object
// This object is registered on the document in the index.html file
export const geoip2 = (document as any).geoip2;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
