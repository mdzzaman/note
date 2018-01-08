import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  navigation: Array<any> = [];
  time: Date = new Date();
  constructor() { }

  ngOnInit() {
    this.navigationData();
  }

  navigationData() {
    this.navigation.push({ name: 'Note', url: '/' });
    this.navigation.push({ name: 'Done', url: '/done' });
    this.navigation.push({ name: 'Stare', url: '/start' });
  }

}
