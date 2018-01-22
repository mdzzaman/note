import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from "@angular/material";
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {
  sideNavigationNode = "";
  @ViewChild('sidenav') sidenav: MatSidenav;
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   if (event.target.innerWidth < 960) {
  //     this.sidenav.close();
  //     this.sideNavigationNode = "over";
  //   } else {
  //     this.sidenav.open();
  //     this.sideNavigationNode = "side";
  //   }
  // }

  constructor(public media: ObservableMedia) {
  }

  ngOnInit() {
    this.media.asObservable()
      .subscribe((change: MediaChange) => {
        let medis = ['xs', 'sm'];
        if (medis.indexOf(change.mqAlias) != -1) {
          this.sidenav.close();
          this.sideNavigationNode = "over";
        }else{
          this.sidenav.open();
          this.sideNavigationNode = "side";
        }
      });
  }

}
