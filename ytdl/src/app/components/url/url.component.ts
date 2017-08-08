import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  url:string;
  placeHolder:string;
  P_text:string;
  constructor() { }

  ngOnInit() {
    this.url="";
    this.P_text = "Enter Video Link";
    this.placeHolder = "Enter Video Link";
  }

  focusOn()
  {
    this.placeHolder = "";
  }

  focusOut()
  {
    if(this.url.trim.length == 0)
      {
        this.placeHolder = this.P_text;
      }
      
  }
}
