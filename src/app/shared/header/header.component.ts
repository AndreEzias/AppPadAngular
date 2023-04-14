import { Component } from '@angular/core';
import { Router } from '@angular/router';                                                   

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  routes: any[] = [];
  isNavbarCollapsed=true;

  constructor(public router: Router) {
    this.routes = router.config;
  }
}
