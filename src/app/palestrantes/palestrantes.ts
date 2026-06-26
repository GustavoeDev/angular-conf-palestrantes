import { Component, inject, OnInit, signal } from '@angular/core';

import { Palestrante, PalestranteService } from './palestrante.service';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.html'
})
export class Palestrantes implements OnInit {
  private readonly palestranteService = inject(PalestranteService);

  palestrantes = signal<Palestrante[]>([]);
  carregando = signal(true);
  mensagemErro = signal('');

  ngOnInit() {
    this.palestranteService.buscarPalestrantes().subscribe({
      next: (palestrantes) => {
        this.palestrantes.set(palestrantes);
        this.carregando.set(false);
      },
      error: () => {
        this.mensagemErro.set('Não foi possível carregar os palestrantes.');
        this.carregando.set(false);
      }
    });
  }
}
