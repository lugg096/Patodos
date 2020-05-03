import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from '../services/guards/login.guard';
import { PagesComponent } from './pages.component';
import { PrincipalComponent } from './principal/principal.component';
import { PerfilComponent } from './perfil/perfil.component';

const pageRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        children: [
            { path: 'ayudas', component: PrincipalComponent, data: { titulo: 'Ayudas' } },
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil' } },
            { path: '', redirectTo: '/ayudas', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
