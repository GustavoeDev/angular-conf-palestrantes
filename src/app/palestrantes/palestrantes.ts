import { Component, inject, OnInit } from '@angular/core';

import { Palestrante, PalestranteService } from './palestrante.service';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.html'
})
export class Palestrantes implements OnInit {
  private readonly palestranteService = inject(PalestranteService);

  palestrantes: Palestrante[] = [];

  ngOnInit() {
    this.palestranteService.buscarPalestrantes().subscribe((palestrantes) => {
      this.palestrantes = palestrantes;
    });
  }
}
