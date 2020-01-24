import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  title = 'martin-system';
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  reason = '';
  constructor() { }

  ngOnInit() {
  }


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
