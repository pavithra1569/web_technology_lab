import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // make sure this file exists

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ],
};
