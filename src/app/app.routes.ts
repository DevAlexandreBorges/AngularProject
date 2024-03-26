import { Routes } from '@angular/router';
import { NotasComponent } from './components/notas/notas.component';
import { AppMainComponent } from './app-main/app-main.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {'path' : '', component:StartPageComponent},
    {'path' : 'app', component:AppMainComponent},
    {'path' : 'about', component:AboutComponent}
];
