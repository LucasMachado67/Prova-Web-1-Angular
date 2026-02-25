import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Registrar } from './pages/registrar/registrar';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
     {path: 'home', component: Home},
     {path: 'register', component: Registrar},
];
