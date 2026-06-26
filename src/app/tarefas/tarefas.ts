import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Tarefa, TarefaService } from './tarefa.service';

@Component({
  selector: 'app-tarefas',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './tarefas.html'
})
export class TarefasComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly tarefaService = inject(TarefaService);
  private readonly destroyRef = inject(DestroyRef);

  tarefas: Tarefa[] = [];

  tarefaForm = this.formBuilder.nonNullable.group({
    titulo: ['', [Validators.required, Validators.pattern(/\S/)]]
  });

  constructor() {
    this.destroyRef.onDestroy(() => {
      console.log('TarefasComponent foi destruído.');
    });
  }

  ngOnInit() {
    this.carregarTarefas();
  }

  adicionarTarefa() {
    if (this.tarefaForm.invalid) {
      this.tarefaForm.markAllAsTouched();
      return;
    }

    const titulo = this.tarefaForm.controls.titulo.value.trim();

    this.tarefaService.adicionarTarefa(titulo);
    this.carregarTarefas();
    this.tarefaForm.reset();
  }

  private carregarTarefas() {
    this.tarefas = this.tarefaService.getTarefas();
  }
}
