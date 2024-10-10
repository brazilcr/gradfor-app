import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private keycloakService: KeycloakService) {}

  login(): void {
    this.keycloakService.login();
  }

  logout(): void {
    this.keycloakService.logout();
  }

  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }

  getUserName(): string | null {
    return this.keycloakService.getUsername();
  }
}
