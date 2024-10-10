import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | undefined;
  roles: string[] = [];
  isAdminUser: boolean = false;

  constructor(private keycloakService: KeycloakService) { }

  async ngOnInit() {
    await this.initializeUserDetails();
  }

  private async initializeUserDetails() {
    try {
      const loggedIn = await this.keycloakService.isLoggedIn();
      
      if (loggedIn) {
        
        const profile = await this.keycloakService.loadUserProfile();
        this.username = profile.username; 
        const allRoles = await this.keycloakService.getUserRoles();
        const showableRoles = ['admin', 'coordenadores', 'professores'];
       
        this.roles = allRoles.filter(role => showableRoles.includes(role));

        //console.log('Username:', this.username);
        //console.log('Roles:', this.roles);
        
        
        this.isAdminUser = this.roles.includes('admin');
      } else {
        console.error('User not logged in.');
      }
    } catch (error) {
      console.error('Error loading user details:', error);
    }
  }
  


  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }

  logout(): void {
    this.keycloakService.logout();
  }

  isAdmin(): boolean {
    return this.isAdminUser;
  }
}
