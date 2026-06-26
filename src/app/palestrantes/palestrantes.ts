import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { Palestrante, PalestranteService } from './palestrante.service';

@Component({
  selector: 'app-palestrantes',
  imports: [RouterLink],
  templateUrl: './palestrantes.html'
})
export class Palestrantes {
  private readonly route = inject(ActivatedRoute);
  private readonly palestranteService = inject(PalestranteService);

  termoBusca = signal('');
  simulandoFalha = signal(this.route.snapshot.data['simularFalha'] === true);

  palestrantes = toSignal(
    toObservable(this.termoBusca).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((termoBusca) => this.palestranteService.buscarPalestrantes(termoBusca, this.simulandoFalha()))
    ),
    { initialValue: [] as Palestrante[] }
  );

  atualizarTermoBusca(event: Event) {
    const input = event.target as HTMLInputElement;
    this.termoBusca.set(input.value);
  }
}
