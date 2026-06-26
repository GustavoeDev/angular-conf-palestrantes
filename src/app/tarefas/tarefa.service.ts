import { Injectable } from '@angular/core';

export interface Tarefa {
  id: number;
  titulo: string;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Confirmar buffet'
    },
    {
      id: 2,
      titulo: 'Imprimir crachás'
    }
  ];

  getTarefas() {
    return [...this.tarefas];
  }

  adicionarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo
    };

    this.tarefas = [...this.tarefas, novaTarefa];

    return novaTarefa;
  }
}
