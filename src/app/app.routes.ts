import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./example/example.page').then((m) => m.ExamplePage),
  },
];
