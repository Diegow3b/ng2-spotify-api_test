import { Component, OnInit } from '@angular/core';
import { SearchComponent } from './../search/search.component';
import { AboutComponent } from './../about/about.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  precompile:[SearchComponent, AboutComponent]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
