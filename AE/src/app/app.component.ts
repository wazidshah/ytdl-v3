import { Component } from '@angular/core';
import {ElectronService} from 'ngx-electron';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public electronService:ElectronService)
  {
    
  }

  onClick()
  {
    if(this.electronService.isElectronApp)
      {
        console.log('In electron');
        this.electronService.ipcRenderer.send('async','1');
      }
      else{
        console.log('No');
      }
  }
}
