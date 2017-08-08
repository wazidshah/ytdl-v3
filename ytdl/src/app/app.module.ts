import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//import material components
import { MdInputModule } from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
import {MdSlideToggleModule} from '@angular/material';
import {MdChipsModule} from '@angular/material';
import {MdProgressSpinnerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { UrlComponent } from './components/url/url.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    FormsModule,
    MdSidenavModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdChipsModule,
    MdProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
