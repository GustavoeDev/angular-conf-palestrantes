import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Palestrante {
  id: number;
  nome: string;
  cargo: string;
  empresa: string;
  foto: string;
  bio: string;
  temaPalestra: string;
  trilha: string;
  nivel: string;
  dia: number;
  horario: string;
}

@Injectable({
  providedIn: 'root'
})
export class PalestranteService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3001/api/palestrantes';

  buscarPalestrantes() {
    return this.http.get<Palestrante[]>(this.apiUrl);
  }
}
