import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  showSideNav: boolean = false;
  tiles = [
    {text: 'One', cols: 5, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 5, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 5, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 10, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }

}
