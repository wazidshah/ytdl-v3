import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  info:any;

  grabInfo(event)
  { console.log("from app comp");
    console.log(event.title);
    this.info = event.title;
    //this.info = event.
  }
}
