import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userRoles: string[] = [];

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    if (this.keycloakService.isLoggedIn()) {
      this.userRoles = this.keycloakService.getUserRoles();
    }
  }

  hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }



}
