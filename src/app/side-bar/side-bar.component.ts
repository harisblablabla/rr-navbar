import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-rr-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  title = 'Side bar';

  constructor() { }

  ngOnInit() {
  }

}
