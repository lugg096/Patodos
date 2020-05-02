import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from '../services/guards/login.guard';
import { PagesComponent } from './pages.component';
import { PrincipalComponent } from './principal/principal.component';

const pageRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        children: [
            { path: 'inicio', component: PrincipalComponent, data: { titulo: 'Inicio' } },
            { path: '', redirectTo: '/inicio', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
