import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'retail';
  name='Donald gatan';


  firstName: string;
  lastName: string;
  siblings: Array<string>;

 

  ngOnInit(){
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
   
  }

}
