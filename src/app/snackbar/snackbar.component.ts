import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { PizzaPartyComponent } from '../pizza-party/pizza-party.component';
//./../piza-party/pizza-party.

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

 constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }
  ngOnInit() {
  }

}
