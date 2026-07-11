import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

interface LoginResponse {
  token: string;
  usuario: {
    id: number;
    nomeCompleto: string;
    email: string;
    perfil: string;
  };
}

const TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3001/api/auth/login';

  private readonly token = signal<string | null>(localStorage.getItem(TOKEN_KEY));

  isAuthenticated = computed(() => !!this.token());

  login(email: string, senha: string) {
    return this.http.post<LoginResponse>(this.apiUrl, { email, senha }).pipe(
      tap((response) => {
        localStorage.setItem(TOKEN_KEY, response.token);
        this.token.set(response.token);
      })
    );
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.token.set(null);
  }

  getToken() {
    return this.token();
  }
}
