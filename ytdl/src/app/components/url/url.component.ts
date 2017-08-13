import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {ElectronService} from 'ngx-electron';
@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  @Output() infoOut:EventEmitter<any> = new EventEmitter();
  url:string;
  placeHolder:string;
  P_text:string;
  response:any;
  v_info:any;
  constructor(public electronService:ElectronService) {
    
   }

  ngOnInit() {
    this.url="";
    this.P_text = "Enter Video Link";
    this.placeHolder = "Enter Video Link";
    console.log();
  }


  onDownload()
  {
    if(this.electronService.isElectronApp)
      {
        console.log('running in electron');
        console.log(this.url);
        //let ret = this.electronService.ipcRenderer.sendSync('GET_DOWNLOAD_OBJECT',this.url);
       // console.log(ret);
        this.electronService.ipcRenderer.send("GIVE_URL_OBJECT",this.url);

        
        
      }
      else{
        console.log('Its running in a normal brwoser');
      }
    
  }

 reply = this.electronService.ipcRenderer.on("GIVE_URL_OBJECT_REPLY",(event,args)=>{
      
      switch(args.linkType)
      {
        case 1: console.log('Its a video and playlist');
        break;
        case 2: console.log('Its a Video');
        this.electronService.ipcRenderer.send("GET_VIDEO_INFO",args.videoId);
        break;
        case 3: console.log('Its a Playlist');
        break;
        default: console.log('Ja be');
      }
    });

videoinfo=this.electronService.ipcRenderer.on("GET_VIDEO_INFO_REPLY",(event,args)=>{
  this.v_info = args;
  this.infoOut.emit(this.v_info);
});
   
}
