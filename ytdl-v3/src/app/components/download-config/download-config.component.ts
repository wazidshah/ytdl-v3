import { Component, OnInit,Inject,NgZone } from '@angular/core';
import {MdDialog, MdDialogRef,MD_DIALOG_DATA} from '@angular/material';
import { DownloadConfig } from '../../models/downloadConfig.model';
import { DisplayInfo } from '../../models/displayInfo.model';
@Component({
  selector: 'app-download-config',
  templateUrl: './download-config.component.html',
  styleUrls: ['./download-config.component.css']
})
export class DownloadConfigComponent implements OnInit {

  displayInfo:DisplayInfo ;
  downloadConfig:DownloadConfig;
  video:boolean;
  playlist:boolean;
  

  constructor(public dialogRef: MdDialogRef<DownloadConfigComponent>,public zone:NgZone) { 
      // this.displayInfo.isListAndVideo = false;
      // this.displayInfo.isPlaylist = false;
      //console.log(this.displayInfo.downloadDirectory);
      //this.downloadConfig.downloadDirectory =this.displayInfo.downloadDirectory; 
  }
    

  ngOnInit() {
    
    console.log(this.displayInfo.link);
    
  }

  saveData(event)
  {
    if(event.currentTarget.value === "Continue")
      {
        this.dialogRef.close();
      }
      else if (event.currentTarget.value === "Cancel")
      {
        this.dialogRef.close();
      }
      console.log(this.downloadConfig.resolution);
      console.log(this.downloadConfig.video_playlist);
      console.log(this.downloadConfig.downloadDirectory);
  }

  setDisplayInfo(info:DisplayInfo)
  {
    this.zone.run(()=>{
      this.displayInfo = info;
    });
    
  }

  setDownloadConfig(info:DownloadConfig)
  {
    this.zone.run(()=>{
      this.downloadConfig = info;
    });
  }

  setUrl(url){
    this.zone.run(()=>{
      this.displayInfo.link = url;
    });
  }

}
