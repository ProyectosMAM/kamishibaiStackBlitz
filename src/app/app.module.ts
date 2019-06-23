import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Para usar Angular Material.
import {MaterialModule} from './material.module';

// Para que las fechas y números esten en español.
import { LOCALE_ID} from '@angular/core';
// https://angular.io/guide/i18n#i18n-pipes
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';


import { RowHorasComponent } from './components/row-horas/row-horas.component';
import { RowHorasControlComponent } from './components/row-horas-control/row-horas-control.component';
import { RowCardsComponent } from './components/row-cards/row-cards.component';

// the second parameter es is optional
registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    RowHorasComponent,
    RowHorasControlComponent,
    RowCardsComponent
    ],
  imports: [
    MaterialModule,
    BrowserModule    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }