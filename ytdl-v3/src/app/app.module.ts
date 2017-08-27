import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdSidenavModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NgxElectronModule } from 'ngx-electron';
import { YtdMainComponent } from './components/ytd-main/ytd-main.component';
import { DownloadConfigComponent } from './components/download-config/download-config.component';
@NgModule({
  declarations: [
    AppComponent,
    YtdMainComponent,
    DownloadConfigComponent
  ],
  entryComponents:[DownloadConfigComponent],
  imports: [
    BrowserModule,
    NgxElectronModule,
    FormsModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
