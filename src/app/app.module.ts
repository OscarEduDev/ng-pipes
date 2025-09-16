import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import localeEsEc from '@angular/common/locales/es-EC';
import localePtPt from '@angular/common/locales/pt-PT';
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsEc);
registerLocaleData(localePtPt);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
