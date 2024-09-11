import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {environment} from './shared/environments'
import {WEEKDAYS} from "./shared/services/channel.service";
import {provideHttpClient} from "@angular/common/http";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {INNERWIDTH} from "./shared/services/channel.service";
import {RESP_INNERWIDTH} from "./shared/services/responsive.service";

const firebaseConfig = {
  projectId: 'dabubble-103e0',
  appId: '1:70509923390:web:61bdc1681f8174a4d1156f',
  storageBucket: 'dabubble-103e0.appspot.com',
  apiKey: 'AIzaSyC5RQtRRhPW7ONg3KcrZ3gPCEekvBZf_5M',
  authDomain: 'dabubble-103e0.firebaseapp.com',
  messagingSenderId: '70509923390',
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
    provideRouter(routes),
    {provide: WEEKDAYS, useValue: environment.weekdays},
    {provide: INNERWIDTH, useValue: environment.INNERWIDTH},
    {provide: RESP_INNERWIDTH, useValue: environment.RESP_INNERWIDTH}
  ]
}