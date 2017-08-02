import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:Address;
  hobbies:string[];
  constructor() { }

  ngOnInit() {
    this.name = "wazid";
    this.age = 23;
    this.address = {
      pin: 403602,
      state:"goa",
      street:"NH 17"
    };
     this.hobbies=["Cricket","Online games","Sleeping"];
  }

  onClick()
  {
    this.name= "Wazid Shah";
  }

  addHobbie(hobbie)
  {
    this.hobbies.unshift(hobbie);
    return false;
  }

  delete(hobbie)
  {
    for(let i=0; i<this.hobbies.length;i++)
      {
        if(this.hobbies[i] == hobbie)
          {
            this.hobbies.splice(i,1);
          }
      }
  }
}

interface Address{
  street:string;
  pin:number;
  state:string;
 
}
