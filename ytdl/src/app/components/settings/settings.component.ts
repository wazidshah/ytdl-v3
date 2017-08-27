import { Component, OnInit, Input } from '@angular/core';
import { Settings } from '../../models/settings';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input('info') info: any;
  testInfo = 'TEST';
  settings: Settings;
  videoRes: string[];
  sideNavOpen= false;
  isGlobalPlayDisabled:boolean= false;
  isGlobalPauseDisabled:boolean= false;
  isGlobalStopDisabled:boolean= false;
  constructor() { }

  ngOnInit() {
    this.videoRes = ["720p","480p","360p","240p","144p"];
    this.settings = {
      defaultRes:"420p",
      numberOfProbes:0,
      videoDirectory:"random"
    }

    console.log(this.sideNavOpen);
  }

  changeSideNav()
  {
    if(this.sideNavOpen)
      {
        this.sideNavOpen = false;
      }
      else
        {
          this.sideNavOpen =true;
        }
    console.log(this.sideNavOpen);
  }
  
}
