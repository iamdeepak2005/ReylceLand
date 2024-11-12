import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConactComponent } from './conact/conact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'contact',component:ConactComponent},
    {path:'about',component:AboutusComponent},
    {path:'service',component:ServiceComponent},
];
