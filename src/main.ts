import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

//import { appRouterProviders } from './app/app.routes';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule/*, [
  appRouterProviders,
  disableDeprecatedForms,
  provideForms
  ]*/);
