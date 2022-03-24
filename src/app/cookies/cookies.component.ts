import { Component, OnInit } from '@angular/core';


declare var init_datalayer: any;
declare var gtag: any;
declare var init_ga: any;
declare var remove_ga:any;

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    new init_datalayer();
    new gtag();
    new init_ga();
    new remove_ga();
  }

}
