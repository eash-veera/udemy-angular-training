import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', --> selector by attribute
  // selector: '.app-servers', --> selector by class
  // below selector is the default way of selecting a component
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['/servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
