import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  name="Kristie";
  count=0;

  constructor() { 
 
  }

  increment(){
    return this.count+=1;
  }

  decrement(){
    return this.count-=1;
  }

@Input() firstName: string;
@Input() lastName: string;
@Input() siblings: [];


  ngOnInit(): void {

  }

}
