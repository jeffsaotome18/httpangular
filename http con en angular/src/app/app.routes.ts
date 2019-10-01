import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultadoheroeComponent } from './components/resultadoheroe/resultadoheroe.component';
import { MessagesComponent } from './components/messages/messages.component';



// toda constante se debe declarar en MAYÚSCULAS por convensión.
const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'heroes', component: HeroesComponent },
{ path: 'heroe/:id', component: HeroeComponent },
{ path: 'buscar/:termino', component: ResultadoheroeComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
