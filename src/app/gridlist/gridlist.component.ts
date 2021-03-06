import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.css']
})
export class GridlistComponent implements OnInit {
 tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
