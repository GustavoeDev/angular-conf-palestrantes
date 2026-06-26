import { Routes } from '@angular/router';

import { Palestrantes } from './palestrantes/palestrantes';
import { TarefasComponent } from './tarefas/tarefas';

export const routes: Routes = [
  {
    path: '',
    component: Palestrantes
  },
  {
    path: 'palestrantes-falha',
    component: Palestrantes,
    data: {
      simularFalha: true
    }
  },
  {
    path: 'tarefas',
    component: TarefasComponent
  }
];
