import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Registrar } from './pages/registrar/registrar';
import { DetailsComponent } from './pages/details-component/details-component';
import { UpdateComponent } from './pages/update-component/update-component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
     {path: 'home', component: Home},
     {path: 'register', component: Registrar},
     {path: 'task/:id', component: DetailsComponent},
     {path: 'update/:id', component: UpdateComponent}
];
