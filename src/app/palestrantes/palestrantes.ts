import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Palestrante, PalestranteService } from './palestrante.service';

@Component({
  selector: 'app-palestrantes',
  imports: [RouterLink],
  templateUrl: './palestrantes.html'
})
export class Palestrantes implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly palestranteService = inject(PalestranteService);
  private readonly destroyRef = inject(DestroyRef);

  palestrantes = signal<Palestrante[]>([]);
  carregando = signal(true);
  mensagemErro = signal('');
  simulandoFalha = signal(false);

  ngOnInit() {
    const simularFalha = this.route.snapshot.data['simularFalha'] === true;
    this.simulandoFalha.set(simularFalha);

    this.palestranteService
      .buscarPalestrantes(simularFalha)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
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
