import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

@Input('info') info:string;
@Input('speed') speed:string;
@Input('progress') progress:number;

  constructor() { }

  ngOnInit() {

  }

}
