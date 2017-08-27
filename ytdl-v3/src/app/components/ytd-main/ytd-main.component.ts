import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { VideoInfoModel } from '../../models/videoInfo.model';
import {MdDialog, MdDialogRef} from '@angular/material';
import { DownloadConfigComponent } from '../download-config/download-config.component';

@Component({
  selector: 'app-ytd-main',
  templateUrl: './ytd-main.component.html',
  styleUrls: ['./ytd-main.component.css']
})
export class YtdMainComponent implements OnInit {
  url: string;
  videoInfo: any[] = [];
  
  
  
  constructor(public electronService: ElectronService, public zone:NgZone,
  public dialog:MdDialog) {
}
  ngOnInit() {
    // this.videoInfo = [
    //   {
    //     id: 0,
    //     imgUrl: 'http://www.getyoutubevideothumbnail.com/Images/Icons/26.png',
    //     info: 'sample video',
    //     size: '200 mb',
    //     speed: '234 kb/s',
    //     progress: '0%',
    //   }
    // ];


   if(this.electronService.isElectronApp)
    {
      this.electronService.ipcRenderer.on('progress',(event,args)=>{
        
          // this.videoInfo[0].progress = args+'%';
          // console.log(this.videoInfo[0].progress);
          // this.zone.run(()=>{
          //   this.videoInfo[0].progress = args + '%';
          // }); 
          // return false;
    });

      this.electronService.ipcRenderer.on('FETCH-DETAILS-REPLY',(event,arg)=>{
        console.log(arg);
        this.zone.run(()=>{
          this.videoInfo.unshift(arg);
        });
        
      });
  } 
    
  }

  onDownload() {
    // if(this.electronService.isElectronApp)
    //   {
    //      this.electronService.ipcRenderer.send('FETCH-DETAILS',this.url);
    //   }
      this.openDialog();
  
  }

  openDialog()
  {
    let dialogRef = this.dialog.open(DownloadConfigComponent);
    dialogRef.updateSize("width: 30,height: 30");
    dialogRef.disableClose = true;
    let di = dialogRef.componentInstance;
    //di.setUrl(this.url);
    di.setDownloadConfig({video_playlist:"",downloadDirectory:"",resolution:""});
    di.setDisplayInfo({
      thumbnailUrl:"https://thethemefoundry.com/wp-content/themes/ttf-reloaded/images/single-theme/video-thumbnail.png",
      title:"Title",
      link:this.url,
      isPlaylist:true as true,
      isListAndVideo:false as false,
      downloadDirectory:"c://",
      availableRes:[{resolution:"720P",size:"400 MB"},
      {resolution:"360P",size:"200 MB"}]
    });
    dialogRef.afterClosed().subscribe(res=>{
      
        //console.log(dialogRef.componentInstance.data);
    });
  }
  



}
