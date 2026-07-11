import { Routes } from '@angular/router';

import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tarefas',
    component: TarefasComponent,
    canActivate: [authGuard]
  }
];
