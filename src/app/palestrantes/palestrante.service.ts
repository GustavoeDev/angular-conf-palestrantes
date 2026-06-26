import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

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
  private readonly apiUrlComFalha = 'http://localhost:3001/api/palestrantes-falha';

  buscarPalestrantes(simularFalha = false) {
    const url = simularFalha ? this.apiUrlComFalha : this.apiUrl;

    return this.http.get<Palestrante[]>(url).pipe(
      tap((palestrantes) => {
        console.log(`Quantidade de palestrantes recebidos: ${palestrantes.length}`);
      }),
      map((palestrantes) => palestrantes.filter((palestrante) => palestrante.empresa === 'Globo')),
      catchError((erro) => {
        console.error('Erro ao buscar palestrantes:', erro);
        return of([]);
      })
    );
  }
}
