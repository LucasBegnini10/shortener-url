import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { StoreModule, provideStore } from '@ngrx/store';
import { authReducer } from './auth/store/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    HttpClientModule,
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideStore(),
    importProvidersFrom(
      StoreModule.forRoot({auth: authReducer})
    )
],
};
