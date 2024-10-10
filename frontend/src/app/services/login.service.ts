import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly _httpClient = inject(HttpClient);
  client_secret = "";
  grant_type="password";
  login(username: string, password: string): Observable<{ token: string }> {
    return this._httpClient.post<{ token: string }>('http://localhost:8081/realms/gradfor/protocol/openid-connect/token', {
      username,
      password,
    });
  }
}
