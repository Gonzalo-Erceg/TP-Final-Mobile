import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
       import('./layaout/home-tab/home-tab.page').then((m)=>m.HomeTabPage),
  
  children: [
      {
        path:'pokemon',
        loadComponent:()=>
          import('./pokemon/pokemon.page').then((m)=>m.PokemonPage),
      },
      {
        path:'teams',
        loadComponent: () => 
          import('./teams/teams.page').then((m) => m.TeamsPage),
      },
      {
        path:'settings',
        loadComponent: () => 
          import ('./settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path:'',
        redirectTo:'pokemon',
        pathMatch:'full',
      },
    ],
  },
];
