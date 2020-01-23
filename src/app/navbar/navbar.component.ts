import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-rr-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Menu';

  constructor() { }

  ngOnInit() {
  }

}
