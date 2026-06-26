import { Routes } from '@angular/router';

import { Palestrantes } from './palestrantes/palestrantes';

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
  }
];
